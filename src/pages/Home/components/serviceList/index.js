import React from 'react'
import FadeIn from 'react-fade-in'

import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import './styles.css'

const ServiceList = (props) => {
    return (
        <FadeIn>
             <Link to={`/service-order/${props.id}`} >
                <div className="service-list-Card">
                    <div className="service-list-header">
                        <p>Número da Ordem de Serviço: <b>{props.id}</b></p>
                        <span className="green-dot"></span>
                    </div>
                    
                    <div className="service-list-main">
                        <p>Data de entrega: <b>{props.finishDate}</b></p>
                        <p>Produto: <b>{props.product}</b></p>
                        <p>Marca: <b>{props.brand}</b></p>
                    </div>
                    
                    <div className="service-list-footer">
                        <p>Ver detalhes </p> <BsArrowRight size="24" color="var(--tertiary-color)" />
                    </div>
                </div>
            </Link>
        </FadeIn>
    )
}

export default ServiceList