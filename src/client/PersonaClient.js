import axios from "axios";

const obtenerPorId = async(id)=>{
    const data  = axios.get(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r=>r.data);
    console.log(data);
    return data;

}

const insertar = async(body)=>{
    axios.post(`http://localhost:8081/matriculaAPI/v1.1/personas/`,body).then(r=>r.data);
    return data;
}

const eliminar = async(id)=>{
    axios.delete(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r=>r.data);
    return data;
}

const actualizar = async(id)=>{
    axios.put(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r=>r.data);
    return data;
}

const actualizarParcial = async()=>{
    axios.patch(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`,body).then(r=>r.data);
    
}
//Obtener fachada
export const obtenerPorIdFachada = async(id)=>{
    return await obtenerPorId(id);
}

export const insertarFachada = async(body)=>{
    return await insertar(body);
}

export const eliminarFachada = async(id)=>{
    return await eliminar(id);
}

export const actualizarFachada = async(id)=>{
    return await actualizar(id);
}
export const actualizarParcialFachada = async(id,body)=>{
    return await actualizarParcialFachada(id,body);
}