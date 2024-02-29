import api from '../lib/axios'

export default {
    obtenerProyectos(){
        return api.get('/proyectos' )
    },
    agregarProyecto(data){
        return api.post('/proyectos', data)
    },
    obtenerPro(id){
        return api.get('/proyectos/' + id)
        //  console.log(id)
    },
    actualizarProyecto(id, data ){
        return api.patch('/proyectos/' + id, data ) 
    },
    eliminarProyecto(id){
        return api.delete('/proyectos/' + id )
    }
}