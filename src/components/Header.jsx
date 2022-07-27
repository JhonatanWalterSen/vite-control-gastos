import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupusto from './NuevoPresupusto'


const Header = ({
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto }) => {
    return (
        <header>
            <h1>Panificador de Gastos</h1>
            {isValidPresupuesto?(
                <ControlPresupuesto presupuesto={presupuesto}/>
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
