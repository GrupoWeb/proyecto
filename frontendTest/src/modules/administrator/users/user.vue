<script>
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config.json";
import { UserServices } from "@/services/User/UserServices";

export default {
  page: {
    title: "Formulario de Usuarios",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { PageHeader },
  data(){
    return {
      submitted: false,
      value1: null,
      options: [
        "Photoshop",
        "illustrator",
        "Html",
        "Css",
        "Php",
        "Java",
        "Python",
        "Ruby",
      ],
      control: {
        modal: {
          add: {
            showModal :false
          }
        }
      },
      title: "Formulario de Datos",
      item: [
        {
          text: "Administración",
          href: "/",
        },
        {
          text: "Datos Generales",
          active: true,
        },
      ],
      columns :['fullName', 'workerPhoneNumber' , 'workerEmail', 'workerAddress', 'nit', 'identification','date_of_birth', 'actions'],
      table_option :{
        headings: {
          fullName: "Nombre Completo",
          workerEmail: "Correo Electrónico",
          workerAddress: "Dirección",
          workerPhoneNumber: 'Número Trabajador',
          nit: 'NIT',
          identification: 'DPI',
          date_of_birth: "Fecha de Cumpeaños",
          actions: "Acciones"
        },
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-striped ',
        columnsClasses: { actions: 'actions text-center' },
        sortable: [],
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
          count: 'Mostrando {from} hasta {to} de {count}',
          filter: '',
          filterPlaceholder: 'Buscar...',
          limit: 'Página:',
        },
        resizableColumns: false,
      },
      items: [],
      modales:
          {
            add: {
              title: 'Nuevo Usuario',
              class: 'customHeader',
              size: 'lg'
            }
          },
      cards:{
        form: {
          title: 'Formulario de Usuario'
        }
      }
    }
  },
  mounted() {
    this.users();
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      } else {
        this.userGridData.push({
          id: this.userGridData.length + 1,
          name: this.users.name,
          designation: this.users.designation,
          projects: this.value1,
          email: this.users.email,
        });
        this.showModal = false;
        this.users = {};
        this.value1 = [];
      }
      this.submitted = false;
    },
    nuevo_usuario(){
      this.control.modal.add.showModal = true
    },
    users() {
      UserServices.getUser().then(r => {
        this.items = r.data
      })
    },
    delete_row(id){
      UserServices.deleteEmployee(id).then(r => {
        if(r.status === 200)
        {
          UserServices.customAlertSuccess('MINTRAB','Proceso realizado con exito!')
          this.users();
        }else{
          UserServices.customAlertDanger('MINTRAB','No se pudo realizar el procedimiento!')
        }
      })
    },
  }
}
</script>
<template>
  <PageHeader :title="title" :items="item" />
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Datos Generales</h4>
        </div>
        <div class="container-fluid">
          <div class="col-12">
            <div class="custom-table">
              <router-link :to="`/administracion/add`"><button type="button" class="btn btn-success" ><i class="bx bx-user-plus"></i>  Nuevo Registro </button></router-link>
              <b-modal v-model="control.modal.add.showModal" :title="modales.add.title" hide-footer centered :header-class="modales.add.class" :size="modales.add.size">
                <div class="row">
                  <div class="col-8">
                    <b-card>
                      <div class="col-8">
                        <label>Nombre Completo</label>
                        <input type="text" class="form-control">
                      </div>
                    </b-card>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <label>Nombre Completo</label>
                    <input type="text">
                  </div>
                </div>
              </b-modal>
              <v-client-table :data="items" :columns="columns" :options="table_option">
                <template #actions="props">
                  <div class="actions text-center">
                    <router-link :to="`/administracion/perfil/${props.row.id }`"> <button type="button" class="btn btn-info mb-2 me-1" ><i class="bx bx-user-circle"></i> Perfil </button></router-link>
                    <button type="button" class="btn btn-danger mb-2 me-1" @click="delete_row(props.row.id)"><i class="bx bx-trash"></i> Eliminar</button>
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

