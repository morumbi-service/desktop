import React, { useState, useEffect } from 'react'

import api from '../../services/api'

// Components
import SideBar from '../../components/sidebar/index'
import Shortcut from './components/shortcuts/index'
import ServiceList from './components/serviceList/index'

import { RiUserAddLine } from 'react-icons/ri'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { BsCreditCard, BsGear } from 'react-icons/bs'
import { Icon } from '@iconify/react';
import washingMachine from '@iconify-icons/mdi/washing-machine'

import './styles.css'

const current = new Date()
const hour = current.getHours()
const formatData = ("0" + current.getDate()).substr(-2) + " do mês " 
+ ("0" + (current.getMonth() + 1)).substr(-2) + " de " + current.getFullYear()

const Home = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        api.get('/page-services')
        .then(response => {
            setServices(response.data);
        })
    });

    return (
        <div id="Home-Page">
            <SideBar />
            <div className="Container-page">
                <div className="content">
                    <div className="header">
                        <header>
                            <h2>Olá Maria, tenha {`${(hour <= 12 ? 'um ótimo dia!' : hour <= 17 ? 'uma ótima tarde!' : 'uma ótima noite!')}`}</h2>
                            <p>Nós estamos no dia <b>{formatData}</b></p>
                        </header> 
                    </div>

                    <div className="shortcuts">

                        <Shortcut
                            title="Adicionar Cliente"
                            link="/create-client"
                        >
                            <RiUserAddLine color="#ffffff" size="24px" height="24px" />
                        </Shortcut>

                        <Shortcut
                            title="Ordem de serviço"
                            link="/create-service-order"
                        >
                             <AiOutlineFileAdd color="#ffffff" size="26px" height="24px" />
                        </Shortcut>

                        <Shortcut
                            title="Adicionar Produto"
                            // link="/create-product"
                        >
                            <Icon icon={washingMachine} color="#ffffff" width="28px" height="28px" />
                        </Shortcut>

                        <Shortcut
                            title="Adicionar Nova Peça"
                            // link="/create-machine-part"
                        >
                            <BsGear color="#ffffff" size="24px" height="24px" />
                        </Shortcut>

                        <Shortcut
                            title="Novo Pagamento"
                            // link="/create-payment"
                        >
                            <BsCreditCard color="#ffffff" size="24px" height="24px" />
                        </Shortcut>
                    </div>

                    <div className="services">
                        {services.map(service => (
                            <ServiceList 
                                id={service.SO_id}
                                finishDate={service.delivery_date}
                                product={service.product}
                                brand={service.brand}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home