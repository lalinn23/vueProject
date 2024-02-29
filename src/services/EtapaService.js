import api from '../lib/axios'

export default {
    obtenerEtapas(){
        return api.get('/etapas')
    },
    agregarEtapa(data){
        return api.post('/etapas', data)
    },
    obtenerEt(id){
        return api.get('/etapas/' + id)
    },
    actualizarEtapa(id, data){
        return api.patch('/etapas/' + id, data)
    },
    eliminarEtapa(id){
        return api.delete('/etapas/' + id)
    }
}