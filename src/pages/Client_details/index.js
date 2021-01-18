import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useParams, Link } from 'react-router-dom'
import Header from '../../components/Header'
import SideBar from '../../components/sidebar'
import api from '../../services/api'

import './styles.css'

const ClientDetails = () => {

    // const params = useParams()
    const { id } = useParams()
    const [client, setClient] = useState({});
    const [service, setService] = useState([])

    useEffect(() => {
        api.get(`/client/${id}`).then((response) => {
            if (response && response.data) {
                console.log(response.data)
                setClient(response.data.user)
                setService(response.data.services)
            }
        })
    })

    return (
        <div id="ClientDitails-Page">
            <SideBar />
            <div className="Container-page">
                <div className="content">
                    <Header 
                        title='Maria, esse é um dos seus clientes.'
                        description='Veja detalhadamente'
                    />

                    <div className="main">
                        <p>Nome: <b>{client.name}</b></p>
                        <p>Endereço: <b>{client.address}, {client.number} - {client.neighborhood}</b></p>
                        <p>Complemento: <b>{client.complement}</b></p>
                        <p>Cidade: <b>{client.city} - {client.UF}</b></p>
                        <p>Whatsapp: <b>{client.whatsapp}</b></p>
                        <p>Telefone: <b>{client.telephone}</b></p>
                        <p>CPF/CNPJ: <b>{client.cpf}</b></p>
                        <p>CEP: <b>{client.cep}</b></p>
                        <p>Email: <b>{client.email}</b></p>
                    </div>

                    <div id="Client_Services-list">
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
                </div>
            </div>
        </div>
    )
}

export default ClientDetails