import React from 'react'
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
                <p>Control Presupusto</p>
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
