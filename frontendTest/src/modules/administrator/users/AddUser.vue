<template>
  <PageHeader :title="title" :items="option"/>
  <div class="panel-body rounded-pills-icon tabs">
    <ul class="nav nav-pills mb-4 mt-3 justify-content-center" id="rounded-pills-icon-tab" role="tablist">
      <li class="nav-item ms-2 me-2">
        <a
            class="nav-link mb-2 active text-center"
            id="rounded-pills-icon-general-tab"
            data-bs-toggle="pill"
            href="#rounded-pills-icon-general"
            role="tab"
            aria-controls="rounded-pills-icon-general"
            aria-selected="true"
        >
          <i class="fas fa-user bx-general"></i>
          General
        </a>
      </li>
    </ul>
    <div class="tab-content" id="rounded-pills-icon-tabContent">
      <div class="tab-pane fade show active" id="rounded-pills-icon-general" role="tabpanel" aria-labelledby="rounded-pills-icon-general-tab">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title mb-3">Datos del Empleado</h5>
                <div class="row">
                  <div class="col-12">
                    <b-form @submit="submitUsuario" @reset="resetUsuario" ref="form" >
                      <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                              label="Primer Nombre"
                              label-for="firstName"
                          >
                            <b-form-input
                                id="firstName"
                                v-model="form.firstName"
                                type="text"
                                placeholder="Primero Nombre"
                                required>
                            </b-form-input>
                          </b-form-group>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                              label="Segundo Nombre"
                              label-for="secondName"
                          >
                            <b-form-input
                                id="secondName"
                                v-model="form.secondName"
                                type="text"
                                placeholder="Segundo Nombre"
                                required>
                            </b-form-input>
                          </b-form-group>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                              label="Primer Apellido"
                              label-for="surname"
                          >
                            <b-form-input
                                id="surname"
                                v-model="form.surname"
                                type="text"
                                placeholder="Primer Apellido"
                                required>
                            </b-form-input>
                          </b-form-group>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                              label="Segundo Apellido"
                              label-for="secondSurName"
                          >
                            <b-form-input
                                id="secondSurName"
                                v-model="form.secondSurName"
                                type="text"
                                placeholder="Segundo Apellido"
                                required>
                            </b-form-input>
                          </b-form-group>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                              label="Correo Electrónico"
                              label-for="email"
                          >
                            <b-form-input
                                id="email"
                                v-model="form.email"
                                type="email"
                                required>
                            </b-form-input>
                          </b-form-group>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                              label="Correo Electrónico"
                              label-for="email"
                          >
                            <b-form-input
                                id="email"
                                v-model="form.email_verify"
                                type="email"
                                required>
                            </b-form-input>
                          </b-form-group>
                        </div>
                      </div>


                      <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                          <b-form-group
                            label="DPI"
                            label-for="identificacion">
                            <b-form-input
                              id="identificacion"
                              v-model="form.dpi"
                              type="text"
                              :maxlength="13"
                              required></b-form-input>
                          </b-form-group>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                          <b-form-group
                            label="NIT"
                            label-for="nit">
                            <b-form-input
                              id="nit"
                              v-model="form.nit"
                              type="text"
                              required></b-form-input>
                          </b-form-group>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                          <b-form-group
                            label="Teléfono"
                            label-for="phone">
                            <b-form-input
                              id="phone"
                              v-model="form.phone"
                              type="text"
                              required></b-form-input>
                          </b-form-group>
                        </div>
                      </div>
                      <b-form-group
                        label="Dirección"
                        label-for="address">
                        <b-form-input
                          id="address"
                          v-model="form.address"
                          type="text"
                          required></b-form-input>
                      </b-form-group>
                      <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                            label="Fecha de Nacimieto"
                            label-for="dateOfBirth">
                            <datepicker
                                id="dateOfBirth"
                                v-model="form.dateOfBirth"
                                :first-day-of-week="1"
                                lang="es"
                                confirm
                                inputFormat="dd/MM/yyyy"
                                class="form-control">
                            </datepicker>
                          </b-form-group>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                            label="Género"
                            label-for="gender">
                            <multiselect
                                v-model="form.gender"
                                :options="form.options"
                                placeholder="Seleccone un Género"
                                :searchable="true"
                                noOptionsText="Sin datos"
                                noResultsText="No se encontro registro">
                            </multiselect>
                          </b-form-group>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                            label="Estado Civil"
                            label-for="maritalStatus">
                            <multiselect
                                v-model="form.maritalStatus"
                                :options="form.optionsMaritalStatus"
                                placeholder="Seleccone un Estado"
                                :searchable="true"
                                noOptionsText="Sin datos"
                                noResultsText="No se encontro registro">
                            </multiselect>
                          </b-form-group>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                            label="Número Afiliación IGSS"
                            label-for="igss">
                            <b-form-input
                              id="igss"
                              v-model="form.igss"
                              type="text"></b-form-input>
                          </b-form-group>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                            label="Departamento"
                            label-for="maritalStatus">
                            <multiselect
                                v-model="form.departments"
                                :options="form.optionDepartments"
                                placeholder="Seleccione"
                                :searchable="true"
                                noOptionsText="Sin datos"
                                @select="eventoSelect"
                                noResultsText="No se encontro registro">
                            </multiselect>
                          </b-form-group>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <b-form-group
                            label="Municipio"
                            label-for="igss">
                            <multiselect
                                v-model="form.muni_data"
                                :options="form.optionMuni"
                                placeholder="Seleccione"
                                :searchable="true"
                                noOptionsText="Sin datos"
                                noResultsText="No se encontro registro">
                            </multiselect>
                          </b-form-group>
                        </div>
                      </div>
                      <b-button type="submit" class="btn btn-success m-1" >Guardar </b-button>
                      <b-button type="reset" class="btn btn-danger" >Cancelar </b-button>
                    </b-form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <LoadingComponent :isVisible="validator.loading" />



</template>

<script>
import appConfig from "@/app.config.json";
import PageHeader from "@/components/page-header";
import { UserServices } from "@/services/User/UserServices";
import '@/design/custom/tabs/custom-tabs.scss'
import Datepicker from "vue3-datepicker";
import Multiselect from "@vueform/multiselect";
import useVuelidate from "@vuelidate/core";
import {required, minLength} from "@vuelidate/validators";
import LoadingComponent from "@/modules/Loading/LoadingComponent";
import {AccountServices} from "@/services/accounts/AccountServices";



export default {
  name: "AddUser",
  page: {
    title: "Usuarios Nuevos",
    meta: [{name: "Usuarios Nuevos", content: appConfig.description}]
  },
  components: { PageHeader, Datepicker, Multiselect, LoadingComponent },
  data(){
    return {
      title: "Nuevos Empleado",
      validator: {
        sameAsPassword: false,
        validError: false,
        loading: false
      },
      option: [
        {
          text: "Empleados",
          href: "/administracion/usuarios",
        },
        {
          text: "Módulo de Empleados",
          active: true,
        },
      ],
      form: {
        firstName: null,
        secondName: null,
        surname: null,
        secondSurName: null,
        email: null,
        email_verify: null,
        dpi: null,
        nit: null,
        phone: null,
        address: null,
        dateOfBirth: null,
        gender: null,
        maritalStatus: null,
        departments: null,
        muni_data: null,
        igss: "",
        options: [
          { value: 'M', label: 'Masculino' },
          { value: 'F', label: 'Femenino' },
          { value: 'O', label: 'Otros' },
        ],
        optionDepartments: [],
        optionMuni: [],
        optionsMaritalStatus: [
          { value: 'casado', label: 'Casado' },
          { value: 'soltero', label: 'Soltero' },
          { value: 'unido', label: 'Unido' },
        ]
      },
      formFamilia: {
        fullName: null,
        gender: null,
        dateOfBirth: null
      },
      modal: {
        familia: {
          tabla: {
            items: [],
            columns: ['full_name','gender','date_of_birth','actions'],
            table_option: {
              headings: {
                full_name: "Nombre Completo",
                gender: 'Género',
                date_of_birth: 'Cumpleaños',
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
                noResults: "Sin Datos que mostrar",
                noRequest: "Sin Registros"
              },
              resizableColumns: true,
            }
          },
          value:false,
          title: "Nuevo Registro Familiar",
          header: "customHeader",
          id: "modalFamilia"
        },
        salario: {
          tabla: {
            items: [],
            columns: ['salary','bonus','agreed_bonus','actions'],
            table_option: {
              headings: {
                salary: "Salario",
                bonus: 'Bonificación 78 89',
                agreed_bonus: 'Bonificación Pactada',
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
                noResults: "Sin Datos que mostrar",
                noRequest: "Sin Registros"
              },
              resizableColumns: true,
            }
          },
          value:false,
          title: "Nuevo Registro de Salario",
          header: "customHeader",
          id: "modalSalario"
        },
        contacto: {
          tabla: {
            items: [],
            columns: ['number','descrition','actions'],
            table_option: {
              headings: {
                number: "Número",
                descrition: 'Descripción',
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
                noResults: "Sin Datos que mostrar",
                noRequest: "Sin Registros"
              },
              resizableColumns: true,
            }
          },
          value:false,
          title: "Nuevo Registro de Contacto",
          header: "customHeader",
          id: "modalContacto"
        }
      }
    }
  },
  methods: {
    submitUsuario(e){
      e.preventDefault()

        this.validator.loading = !this.validator.loading
          if(UserServices.validateEmail(this.form)){
            UserServices.setUser(this.form).then(response => {
              if(response.status === 200){
                this.validator.loading = !this.validator.loading
                AccountServices.customAlertSuccess('MINTRAB', 'Empleado creado con exito!')
                this.resetUsuario()
              }else{
                AccountServices.customAlertDanger('MINTRAB','Error en la comunicación')
                this.validator.loading = !this.validator.loading
              }
            })
          }
          else{
            AccountServices.customAlertDanger('MINTRAB','Los Email no son iguales')
            this.validator.loading = !this.validator.loading
          }

    },
    getDepartamentos(){
      UserServices.getDepartamento().then(response => {
        this.form.optionDepartments = response.data
      })
    },
    eventoSelect(){
      this.form.muni_data = null
      UserServices.getMunicipioByIdDepartamento(this.form.departments).then(
          response =>{
            this.form.optionMuni = response.data
          }
      )

    },
    resetUsuario(){
      this.form.firstName = null
      this.form.secondName = null
      this.form.surname = null
      this.form.secondSurName = null
      this.form.email = null
      this.form.dpi = null
      this.form.nit = null
      this.form.address = null
      this.form.dateOfBirth = null
      this.form.gender = null
      this.form.maritalStatus = null
      this.form.igss = null
      this.form.departments = null
      this.form.muni_data = null

    },
  },
  mounted() {
    this.getDepartamentos()
  },
  setup(){
    return {v$: useVuelidate()};
  },
  validations: {
    form: {
      password: { required, minLength: minLength(6) }
    }
  }

}
</script>

<style scoped>

</style>