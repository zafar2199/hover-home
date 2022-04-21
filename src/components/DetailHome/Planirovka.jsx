import React from 'react'
import PlanShow from '../../assets/images/planirovka.png'

const Planirovka = () => {
    return (
        <div className='planirovka'>
            <div className='container'>
                <div className='row'>
                    <h2>KVARTIRA 23</h2>
                    <div className='show-plan'>
                        <img src={PlanShow} alt='immg show' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planirovka
