import api from "../lib/axios";

export default {
    obtenerActividad(){
        return api.get('/actividades')
    },
    agregarActividad(data){
        return api.post('/actividades', data)
    } ,
    obtenerActividades(id){
        return api.get('/actividades/'+ id)
    },
    actualizarActividad(id, data){
       return api.patch('/actividades/' + id, data)
    },
    eliminarActividad(id){
        return api.delete('/actividades/' + id)
    }
    
}