import api from '../lib/axios'

export default {
    obtenerFases(){
        return api.get('/fases')
    },
    agregarFase(data){
        return api.post('/fases', data)
    },
    obtenerFa(id){
        return api.get('/fases/' + id)
    },
    actualizarFase(id, data){
        return api.patch('/fases/'+ id, data)
    },
    eliminarFase(id){
        return api.delete('/fases/'+ id)
    }
}