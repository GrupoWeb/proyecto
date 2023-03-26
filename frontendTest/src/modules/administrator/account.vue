<template>
  <PageHeader :title="title" :items="item"/>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Cuentas Corrientes</h4>
        </div>
        <div class="container-fluid">
          <div class="custom-table">
            <b-button variant="primary" class="btn-label" @click="newCuenta"><i class="bx bx-food-menu label-icon"></i>
              Nueva Cuenta
            </b-button>
            <b-modal v-model="modal.new.openModal" id="modalCuenta" centered :title="modal.new.title"
                     :header-class="modal.new.header" hide-footer>
              <label for="cuenta_id">Cuenta</label>
              <input name="cuenta_id" type="text" v-model="form.name" class="form-control"
                     :class="{ 'is-invalid': modal.new.form.submitform && v$.form.name.$error}" placeholder="Cuenta"/>
              <div v-if="modal.new.form.submitform && v$.form.name.$error" class="invalid-feedback">
                <span v-if="v$.form.name.required.$message">{{ v$.form.name.required.$message }}</span>
              </div>
              <b-form-group class="mb-3 form-label" id="input-cuenta" label="Cuenta Principal"
                            label-for="input_principal">
                <multiselect v-model="modal.new.form.select" :options="modal.new.form.options"
                             placeholder="Seleccone una cuenta maestra" :searchable="true" noOptionsText="Sin datos"
                             noResultsText="No se encontro registro"></multiselect>
              </b-form-group>
              <button class="btn btn-primary" type="button" @click="setForm" v-if="!isUpdate"><i
                  class="bx bx-loader bx-spin font-size-16 align-middle me-2" v-if="preloading.loading"></i>Guardar
              </button>
              <button class="btn btn-primary" @click="editAccount(form.id)" v-else><i
                  class="bx bx-loader bx-spin font-size-16 align-middle me-2" v-if="preloading.loading"></i>Actualizar
              </button>
            </b-modal>
            <div class="col-12">
              <div class="d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0">
                <button class="btn m-1 btn-info" @click="export_table('csv')"><i
                    class="fas fa-file-csv"></i> CSV
                </button>
                <button class="btn m-1 btn-success" @click="export_table('excel')"><i
                    class="fas fa-file-excel"></i> EXCEL
                </button>
                <button class="btn m-1 btn-secondary" @click="export_table('print')"><i
                    class="fas fa-print"></i> Print
                </button>
                <button  class="btn m-1 btn-danger" @click="export_table('pdf')"><i
                    class="fas fa-file-pdf"></i> PDF
                </button>
              </div>
              <v-client-table :data="items" :columns="columns" :options="table_option">
                <template #actions="props">
                  <div class="text-center">
                    <button type="button" class="btn btn-info mb-2 me-1" @click="updateAccount(props.row.id)"><i class="bx bx-user-circle"></i> Editar
                    </button>
                    <button type="button" class="btn btn-danger mb-2 me-1" @click="delete_row(props.row.id)"><i
                        class="bx bx-trash"></i> Eliminar
                    </button>
                  </div>
                </template>
              </v-client-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { AccountServices } from "@/services/accounts/AccountServices";
import appConfig from "@/app.config.json";
import PageHeader from "@/components/page-header";
import Multiselect from "@vueform/multiselect";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  page: {
    title: "Cuenta",
    meta: [{name: "Cuenta", content: appConfig.description}]
  },
  name: "account",
  components: {PageHeader, Multiselect},
  data() {
    return {
      title: "Módulo de Cuenta",
      item: [
        {
          text: "Administración",
          href: "/",
        },
        {
          text: "Módulo de Cuenta",
          active: true,
        },
      ],
      columns: ['Cuenta', 'Padre', 'actions'],
      items: [],
      isUpdate: false,
      regitros: [],
      table_option: {
        headings: {
          Cuenta: "Cuenta",
          Padre: 'Cuenta Principal',
          actions: "Acciones"
        },
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table  table-light table-bordered table-striped  table-hover  table-custom',
        columnsClasses: {actions: 'table-action text-center', cuenta: 'table-cuenta', padre: 'table-padre'},
        sortable: [],
        pagination: {nav: 'scroll', chunk: 5},
        texts: {
          count: 'Mostrando {from} hasta {to} de {count}',
          filter: '',
          filterPlaceholder: 'Buscar...',
          limit: 'Página:',
        },
        resizableColumns: true,
      },
      form: {
        name: "",
        id: ""
      },
      modal: {
        new: {
          openModal: false,
          title: "Cuentas Corrientes",
          class: "font-18",
          header: 'customHeader',
          text: "warning",
          form: {
            input: "",
            select: null,
            options: [],
            submitform: false,
          }
        }
      },
      preloading: {
        loading: false
      }
    }
  },
  setup() {
    return {v$: useVuelidate()};
  },
  validations: {
    form: {
      name: {
        required: helpers.withMessage("Este dato es requerido", required),
      }
    }
  },
  mounted() {
    this.getAccount()
  },
  methods: {
    export_table(type) {
      AccountServices.exportTable(type,this.columns, this.items, 'Reporte ')
    },
    getAccount() {
      AccountServices.getAccount().then(r => {
        this.items = r.data
      })
    },
    newCuenta() {
      this.modal.new.openModal = true
      this.getParents()
    },
    updateAccount(id){
      this.modal.new.openModal = true
      this.isUpdate = true
      AccountServices.getAccountById(id).then(r => {
        this.resetForm()
        this.form.id = id
        if(r.data.parent_id !== null)
        {
          this.form.name = r.data.title
          this.getParents()
          this.modal.new.form.select = r.data.parent_id
        }else
        {
          this.form.name = r.data.title
          this.getParents()

        }
      })
    },
    async setForm(e) {
      e.preventDefault()
      this.modal.new.form.submitform = true;
      this.preloading.loading = !this.preloading.loading
      this.v$.$touch();
      const result = await this.v$.$validate();
      if (result) {
        await AccountServices.setAccount(this.form.name, this.modal.new.form.select).then(() => {
          this.preloading.loading = !this.preloading.loading
          this.modal.new.openModal = !this.modal.new.openModal
          this.resetForm()
          this.getAccount()
        })
      }else{
        this.preloading.loading = !this.preloading.loading
      }
    },
    resetForm() {
      this.form.name = ""
      this.modal.new.form.select = null
      this.form.id = ""
    },
    getParents() {
      AccountServices.getParents().then(r => this.modal.new.form.options = r)
    },
    delete_row(id){
      AccountServices.deleteAccountById(id).then(r => {
        if(r.status === 200)
        {
          AccountServices.customAlertSuccess('Sistema Comunicación Visual','Proceso realizado con exito!')
          this.getAccount()
        }else{
          AccountServices.customAlertDanger('Sistema Comunicación Visual','No se pudo realizar el procedimiento!')
        }
      })
    },
    editAccount(id){
      this.preloading.loading = !this.preloading.loading
      AccountServices.editAccountById(id, this.form.name, this.modal.new.form.select).then(r => {
        if(r.status === 200){
          AccountServices.customAlertSuccess('Sistema Comunicación Visual','Proceso realizado con exito!')
          this.getAccount()
          this.resetForm()
          this.preloading.loading = !this.preloading.loading
          this.modal.new.openModal = !this.modal.new.openModal
        }else{
          AccountServices.customAlertDanger('Sistema Comunicación Visual','No se pudo realizar el procedimiento!')
        }
      })
    }
  },
}
</script>
