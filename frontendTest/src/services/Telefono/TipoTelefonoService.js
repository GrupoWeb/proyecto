import axios from 'axios'
import { api } from "@/api"

export const TipoTelefonoService = {
    async getTipos(){
        return axios.get(api[0].get.tipoTelefono).then(r => r)
    }

}

export default { TipoTelefonoService }