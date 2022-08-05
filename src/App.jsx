import { useState, useEffect } from 'react'
import Filtros from './components/Filtros'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import iconoGasto from './img/nuevo-gasto.svg'


function App() {

const [presupuesto, setPresupuesto] = useState(
  Number(localStorage.getItem('presupuesto')) ?? 0
)
const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
const [modal, setModal] = useState (false)
const [animarModal, setAnimarModal] = useState(false)
const [gastos, setGastos] = useState(
  localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gasatos')) : []
)
const [gastoEditar, setGastoEditar] = useState({})
const [filtro, setFiltro] = useState('')
const [gastosFiltro, setGastosFiltro] = useState([])

useEffect(() => {
  if (Object.keys(gastoEditar).length > 0 ) {
    setModal(true)

    setTimeout(()=>{
      setAnimarModal(true)
    },500)
  }
}, [gastoEditar])

useEffect(() => {
  localStorage.setItem('presupuesto',presupuesto ?? 0)
}, [presupuesto])

useEffect(() => {
  localStorage.setItem('gasatos',JSON.stringify(gastos) ?? [])
}, [gastos])

useEffect(() => {
  if (filtro) {
    //Filtrar Gastos por categoria
    const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)
    setGastosFiltro(gastosFiltrados)
  }
}, [filtro])

useEffect(() => {
  const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
  if (presupuestoLS > 0) {
    setIsValidPresupuesto(true)
  }
}, [])

const handleNuevoGasto = () =>{
  setModal(true)
  setGastoEditar({})

  setTimeout(()=>{
    setAnimarModal(true)
  },500)
}
const guardarGasto = gasto =>{
  if (gasto.id) {
    // Actualizar
    const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
    setGastos(gastosActualizados)
    setGastoEditar({})
  } else {
    //Nuevo gasto
    gasto.id = self.crypto.randomUUID();
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
  }
  setAnimarModal(false)
  setTimeout(()=>{
      setModal(false)
  },500)
}

const eliminarGasto = id => {
  const gastosActualizados = gastos.filter( gasto => gasto.id !== id)
  setGastos(gastosActualizados)
}


  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        setGastos={setGastos}
        >
      </Header>

    {isValidPresupuesto && (
      <>
      <main>
        <Filtros 
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <ListadoGastos
          gastos={gastos}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}

          filtro={filtro}
          gastosFiltro={gastosFiltro}
        />
      </main>
      <div className="nuevo-gasto">
        <img
          src={iconoGasto}
          alt="icono nuevo asto"
          onClick={handleNuevoGasto}
        />
      </div>
      </>
    )}

    { modal && <Modal
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      guardarGasto={guardarGasto}
      gastoEditar={gastoEditar}
      setGastoEditar={setGastoEditar}
      /> }

    </div>
  )
}

export default App
