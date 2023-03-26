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
  <!-- right offcanvas -->
  <b-offcanvas title="asdf" backdrop placement :visible="true">

  </b-offcanvas>
  <LoadingComponent :isVisible="validator.loading" />



</template>

<script>
import appConfig from "@/app.config.json";
import PageHeader from "@/components/page-header";
import { UserServices } from "@/services/User/UserServices";
import '@/design/custom/tabs/custom-tabs.scss'
import '@/design/dropdown/dropdown.scss'
import Datepicker from "vue3-datepicker";
import Multiselect from "@vueform/multiselect";
import useVuelidate from "@vuelidate/core";
import { minLength } from "@vuelidate/validators";
import LoadingComponent from "@/modules/Loading/LoadingComponent";
import {AccountServices} from "@/services/accounts/AccountServices";




export default {
  name: "UserProfile",
  page: {
    title: "Perfil de Empleados",
    meta: [{name: "Informacíon de Usuario", content: appConfig.description}]
  },
  components: { PageHeader, Datepicker, Multiselect, LoadingComponent },
  data(){
    return {
      title: "Informacíon de Empleados",
      id : this.$route.params.id,
      isUpdate: false,
      validator: {
        sameAsPassword: false,
        validError: false,
        loading: false
      },
      option: [
        {
          text: "empelados",
          href: "/administracion/usuarios",
        },
        {
          text: "Módulo de empleados",
          active: true,
        },
      ],
      form: {
        firstName: null,
        secondName: null,
        surname: null,
        secondSurName: null,
        email: null,
        dpi: null,
        nit: null,
        phone: null,
        address: null,
        dateOfBirth: null,
        gender: null,
        maritalStatus: null,
        departments: null,
        muni_data: null,
        igss: null,
        img: {
          pathAvatar: [],
          enabled: false,
          pathName: null
        },
        imgAvatar: null,
        options: [
          { value: 'M', label: 'Masculino' },
          { value: 'F', label: 'Femenino' },
          { value: 'O', label: 'Otros' },
        ],
        optionsMaritalStatus: [
          { value: 'casado', label: 'Casado' },
          { value: 'soltero', label: 'Soltero' },
          { value: 'unido', label: 'Unido' },
        ]
      },


      modal: {
      },
      preloading: {
        loading: false
      }
    }
  },
  methods: {
    profileById(){
      UserServices.profileById(this.id).then(response => {
        console.log(response.data)
        this.form.firstName = response.data.firstName
        this.form.secondName = response.data.secondName
        this.form.surname = response.data.surname
        this.form.secondSurName = response.data.secondSurname
        this.form.email = response.data.workerEmail
        this.form.dpi = response.data.identification
        this.form.nit = response.data.nit
        this.form.address = response.data.workerAddress
        this.form.gender = response.data.gender
        this.form.maritalStatus = response.data.marital_status
        this.form.phone = response.data.workerPhoneNumber
        this.form.igss = response.data.igss
        this.form.departments = response.data.departments_id
        this.form.dateOfBirth =  response.data.date_of_birth != null ? UserServices.reverseFormat(response.data.date_of_birth) :''
        this.departamentosMunicipios(response.data.munis_id)
      })
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
    changeMuni(){
      UserServices.getMunicipioByIdDepartamento(this.form.departments).then(
          response =>{
            this.form.optionMuni = response.data
          }
      )

    },
    departamentosMunicipios(id){
      if(this.form.departments != null) {
        this.changeMuni()
        this.form.muni_data = id
      }
    },
    submitUsuario(e){
      e.preventDefault()
        this.validator.loading = !this.validator.loading
            UserServices.updateUser(this.id,this.form).then(response => {
              if(response.status === 202){
                this.validator.loading = !this.validator.loading
                AccountServices.customAlertSuccess('MINTRAB', 'Usuario Modificado!')
                this.profileById()
              }else{
                AccountServices.customAlertDanger('MINTRAB','Error en la comunicación')
                this.validator.loading = !this.validator.loading
              }
            })

    },


    resetUsuario(){
      this.form.firstName = null
      this.form.secondName = null
      this.form.surname = null
      this.form.secondSurName = null
      this.form.email = null
      this.form.password = null
      this.form.confirmPassword = null
      this.form.dpi = null
      this.form.nit = null
      this.form.address = null
      this.form.dateOfBirth = null
      this.form.gender = null
      this.form.maritalStatus = null
      this.form.igss = null
      this.form.pathAvatar = []

    },
  },
  mounted() {
    this.profileById()
    this.getDepartamentos()


  },
  setup(){
    return {v$: useVuelidate()};
  },
  validations: {
    form: {
      password: { minLength: minLength(6) }
    }
  }

}
</script>

