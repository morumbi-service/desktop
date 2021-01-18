import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import api from '../../../../services/api';
import { Link } from 'react-router-dom'

// styles
import './styles.css'
import FadeIn from 'react-fade-in';

const ServiceList = () => {

    const [service, setService] = useState([])

    useEffect(() => {
        api.get('/services').then((response) => {
            if(response && response.data) {
                setService(response.data)
            }
        })
    })

    return (
        <FadeIn>
            <div id="Services-list">
                <ul>
                    {service.map(item => {
                        return (
                        <li
                            key={String(item.SO_id)}
                        >
                            <Link to={`/service-order/${item.SO_id}`}>
                            <div className="service-list-Card">
                                
                                <div className="service-list-main">
                                    <p>Numero da Ordem de Serviço: <b>{item.SO_id}</b></p>
                                    <p>Data de entrega: <b>{item.delivery_date}</b></p>
                                    <p>Produto: <b>{item.product}</b></p>
                                </div>
                                
                                <div className="service-list-footer">
                                    <p>Ver detalhes </p> <BsArrowRight size="24" color="var(--tertiary-color)" />
                                </div>
                            </div>
                            </Link>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </FadeIn>
  );
}

export default ServiceList;