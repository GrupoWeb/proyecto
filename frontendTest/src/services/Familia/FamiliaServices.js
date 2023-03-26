import axios from 'axios'
import { api } from "@/api"
import { UserServices } from "@/services/User/UserServices";

export const FamiliaServices = {
    async setFamiliaByUser(id,form){
        return axios.post(api[0].post.setUserFamilia,{
            full_name: form.fullName,
            gender : form.gender,
            date_of_birth: UserServices.convertFormat(form.date_of_birth),
            user_id: id
        }).then(r => r)
    },
    async getFamiliaByUser(id){
        return axios.get(api[0].get.familia + '/' + id).then(r => r)
    },
    async getFamiliaById(id){
        return axios.get(api[0].get.familiaByUser + '/' + id).then(r => r)
    },
    async updateFamiliaById(form){
        return axios.put(api[0].put.familia + '/' + form.id, {
            full_name: form.fullName,
            gender: form.gender,
            date_of_birth: UserServices.convertFormat(form.date_of_birth),
            user_id: form.user_id,
        }).then(r => r)
    },
    async deleteFamiliaById(id){
        return axios.delete(api[0].delete.familia + '/' + id).then(r => r)
    },


}

export default { FamiliaServices }