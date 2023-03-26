import axios from 'axios'
import { api } from "@/api"

export const TelefonoService = {

    async getTelefonoByUser(id){
        return axios.get().then(r => r)
    }
}

export default { TelefonoService }