import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupusto from './NuevoPresupusto'


const Header = ({
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
    gastos,
    setGastos }) => {
    return (
        <header>
            <h1>Panificador de Gastos</h1>
            {isValidPresupuesto?(
                <ControlPresupuesto
                    presupuesto={presupuesto}
                    gastos={gastos}
                    setGastos={setGastos}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            ):
                <NuevoPresupusto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            }
        </header>
    )
}

export default Header
