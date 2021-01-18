import React, { useState, useEffect } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import api from '../../services/api'

import SideBar from '../../components/sidebar/index'
import Header from '../../components/Header/index'
import ClientsList from './components/ClientsList/index'

import './styles.css'

const Clients = () => {

    const [clients, setClients] = useState([])
    // const [query, setQuery] = useState('')

    useEffect(() => {
        api.get('/clients').then((response) => {
            if(response && response.data) {
                setClients(response.data)
            }
        })
    })

    return (
        <div id="Clients-Page">
            <SideBar />
            <div className="Container-page">
                <div className="content">
                    <div className="Clients-align-left">
                        <Header 
                            title='Maria, veja os seus clientes'
                            description='Listando todos os clientes que você cadastrou'
                        />

                        <div className="searchClient">
                            <input 
                                placeholder="Está procurando por alguém?"
                                type="text"
                                name="searchClient"
                                id="searchClient"
                                autoCapitalize="false"
                                autoComplete="off"
                                // onChange={e => setQuery(e.target.value)}
                            />
                            <RiSearchLine size="28" color="#0B2545" />
                        </div>
                        
                        <div className="Clients-clientlist">
                            {clients.map(client => (
                                <ClientsList
                                    client_id={client.client_id}
                                    name={client.name}
                                    telefone={client.telefone ? client.telefone : client.whatsapp}
                                    address={client.address}
                                    number={client.number}
                                    cep={client.cep}
                                    UF={client.UF}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients