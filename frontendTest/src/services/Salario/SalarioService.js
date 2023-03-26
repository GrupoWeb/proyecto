import axios from 'axios'
import { api } from "@/api"

export const SalarioService = {
    async getSalarioByUser(id){
        return axios.get(api[0].get.salario + '/' + id).then(r => r)
    },
    async setSalarioByUser(id, form){
        return axios.post(api[0].post.salario, {
            salary: form.salario,
            bonus: form.bono,
            agreed_bonus: form.bonoextra,
            user_id: id
        }).then(r => r)
    },
    async getSalarioById(id){
        return axios.get(api[0].get.salarioById + '/' + id).then(r => r)
    },
    async updateSalarioByUser(form){
        return axios.put(api[0].put.salario + '/' + form.id, {
            salary: form.salario,
            bonus: form.bono,
            agreed_bonus: form.bonoextra,
            user_id : form.user_id
        }).then(r => r)
    },
    async deleteSalarioById(id){
        return axios.delete(api[0].delete.salario + '/' + id).then(r => r)
    }
}

export default { SalarioService }