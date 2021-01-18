import React from 'react'

import SideBar from '../../components/sidebar/index'
import Header from '../../components/Header/index'
import ServiceList from './components/ServiceList/index'
import Input from '../../components/Input/index'

const Clients = () => {
    return (
        <div id="Clients-Page">
            <SideBar />
            <div className="Container-page">
                <div className="content">
                    <div className="Clients-align-left">
                        <Header 
                            title='Maria, veja os seus serviços'
                            description='Listando todos os serviços que você cadastrou'
                        />

                        <Input 
                            title='Está procurando por algum serviço?'
                        />
                        
                        <ServiceList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients