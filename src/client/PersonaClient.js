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


//Obtener fachada
export const obtenerPorIdFachada = async(id)=>{
    return await obtenerPorId(id);
}

export const insertarFachada = async(body)=>{
    return await insertar(body);
}