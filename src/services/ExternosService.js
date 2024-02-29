import api from '../lib/axios'

export default {
    obtenerExternos() {
        return api.get('/externos')
    },
    agregarExterno(data){
        return api.post('/externos', data)
    },
    obtenerExterno(id){
        return api.get('/externos/' + id)
    },
    actualizarExterno(id, data ){
        return api.patch('/externos/' + id, data)
    },
    eliminarExterno(id){
        return api.delete('/externos/' + id )
    }
}