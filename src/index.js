import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'

import StartPage from "./App"
import Home from "./pages/Home/index"
import CreateClient from './pages/Create_client/index'
import Clients from './pages/Clients/index'
import ClientDetails from './pages/Client_details/index'
import CreateServiceOrder from './pages/Create_service-order/index'
import ServiceOrders from './pages/Service_orders/index'
import ServiceDetails from './pages/Service_details/index'

ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route component={StartPage} exact path="/" />
                <Route component={Home}  exact path="/home" />
                <Route component={CreateClient} path='/create-client' />
                <Route component={Clients} path='/clients' />
                <Route component={ServiceOrders} path='/service-orders' />
                <Route component={CreateServiceOrder} path='/create-service-order' />
                <Route component={ClientDetails} path='/client/:id' />
                <Route component={ServiceDetails} path='/service-order/:id' />
            </main>
        </div>
    </Router>, 
    document.getElementById("root")
)
