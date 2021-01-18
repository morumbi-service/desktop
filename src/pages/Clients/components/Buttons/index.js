import React from 'react'
import { RiUserAddLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import './styles.css'

const Buttons = () => {
    return(
        <div id="Client-buttons">
            <div className="buttons-main">

                <div className="button">
                    <p className="text-button">Clientes Contados</p>
                    <p className="count">156</p>
                </div>

                <Link to="/add-new-client">
                    <div className="button">
                        <p className="text-button">Adicionar Cliente</p>
                        <RiUserAddLine color="#ffffff" size="24px" height="24px" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Buttons