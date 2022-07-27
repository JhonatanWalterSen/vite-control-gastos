import React ,{ useState } from 'react'
import cerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'


const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
    const [mensaje, setMensaje]= useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const ocultarModal = ()=>{

        setAnimarModal(false)
        setTimeout(()=>{
            setModal(false)
        },500)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('enviado datos del form');
        if ([nombre,cantidad,categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios');
            setTimeout(()=>{
                setMensaje('')
            },1500)
            return
        }
        guardarGasto({nombre,cantidad,categoria})
    }

    
    return (
        <div  className="modal">
            <div className="cerrar-modal">
                <img src={cerrarBtn} alt="close" onClick={ocultarModal}/>
            </div>
            <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar": "cerrar"}`}>
                <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input value={nombre} onChange={e=>setNombre(e.target.value)} id="nombre" type="text" placeholder="Añade el nombre del Gasto"/>
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input value={cantidad} onChange={e=>setCantidad(Number(e.target.value))} id="cantidad" type="number" placeholder="Añade la cantidad del Gasto: ej. 200"/>
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>
                    <select id="categoria" value={categoria} onChange={e=>setCategoria(e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="suscripciones">Suscripciones</option>

                    </select>
                </div>

                <input type="submit" value="Añadir Gasto"/>
            </form>
        </div>
    )
}

export default Modal
