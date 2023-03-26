import axios from 'axios'
import { api } from "@/api"
import moment from "moment";
import Swal from "sweetalert2";

export const UserServices = {
    async getDepartamento(){
        return axios.get(api[0].get.departamentos).then(r => r)
    },
    async getMunicipioByIdDepartamento(id){
        return axios.get(api[0].get.municipio + id).then(r => r)
    },
    getUser(){
        return axios.get(api[0].get.users).then(r => r)
    },
    async deleteEmployee(id){
        return axios.delete(api[0].delete.deleteEmployee + id).then(r => r)
    },
    async setUser(form){
        const formData = new FormData()
        formData.append('firstName', form.firstName);
        formData.append('secondName', form.secondName);
        formData.append('surname', form.surname);
        formData.append('secondSurname', form.secondSurName);
        formData.append('workerPhoneNumber', form.phone);
        formData.append('workerEmail', form.email);
        formData.append('workerAddress', form.address);
        formData.append('identification', form.dpi);
        formData.append('date_of_birth', this.convertFormat(form.dateOfBirth));
        formData.append('nit', form.nit);
        formData.append('gender', form.gender);
        formData.append('marital_status', form.maritalStatus);
        formData.append('igss', form.igss);
        formData.append('departments_id', form.departments);
        formData.append('munis_id', form.muni_data);
        return axios.post(api[0].post.setUser, formData, { headers: { 'Content-Type': 'multipart/form-data' } } )
            .then(r => r)
    },
    convertFormat(date) {
        return moment(date).format("YYYY-MM-DD");
    },
    reverseFormat(date){
        const [year, month, day] = date.split('-')
        const dates = new Date(year, month -1, day)
        return dates
    },
    validateEmail(form){
        return form.email === form.email_verify
    },
    async profileById(id){
        return axios.get(api[0].get.profile + id).then(r => r)
    },

    async updateUser(id,form){
        const formUpdate = new FormData()
        formUpdate.append('firstName', form.firstName);
        formUpdate.append('secondName', form.secondName);
        formUpdate.append('surname', form.surname);
        formUpdate.append('secondSurname', form.secondSurName);
        formUpdate.append('workerPhoneNumber', form.phone);
        formUpdate.append('workerEmail', form.email);
        formUpdate.append('workerAddress', form.address);
        formUpdate.append('identification', form.dpi);
        formUpdate.append('date_of_birth', this.convertFormat(form.dateOfBirth));
        formUpdate.append('nit', form.nit);
        formUpdate.append('gender', form.gender);
        formUpdate.append('marital_status', form.maritalStatus);
        formUpdate.append('igss', form.igss);
        formUpdate.append('departments_id', form.departments);
        formUpdate.append('munis_id', form.muni_data);
        return axios.put(api[0].put.updateUser + id, formUpdate, { headers: { 'Content-Type': 'multipart/form-data' } } )
            .then(r => r)
    },


    async customAlertSuccess(title, text){
        await Swal.fire({
            title: title,
            text: text,
            imageUrl: require("@/assets/img/logo.png"),
            imageHeight: 150,
            confirmButtonColor: "#556ee6",
        });
    },
    async customAlertDanger(title, text){
        await Swal.fire({
            title: title,
            text: text,
            icon:'error',
            confirmButtonColor: "#f46464",
        });
    },

}

export default { UserServices }