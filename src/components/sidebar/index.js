import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import { Icon } from '@iconify/react';
import washingMachine from '@iconify-icons/mdi/washing-machine';

import { 
    BsFillHouseFill, 
    BsFillPeopleFill, 
    BsCreditCard, 
    BsGearFill, 
    BsFillArchiveFill 
} from 'react-icons/bs'
import { FaClipboardList } from 'react-icons/fa'

import Logo from '../../assets/images/LogoMB.svg'

import './styles.css'

const SideBar = () => {

    let pathname = window.location.pathname;

    useRef(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname]);

    return (
        <div id="SideBar">
          <div className="sidebar-header">
              <img src={Logo} alt="logoImage"/>
          </div>
          <div className="menu">
              <Link className={`${pathname.match('/home') ? 'active-link' : 'inactive-link'}`} to="/home" >
                  <BsFillHouseFill color="#fff" size="24" />
                  <p className={`${pathname.match('/home') ? 'active-section' : 'inactive-section'}`} >Inicio</p>
              </Link>
 
              <Link className={`${pathname.match('/service-orders') ? 'active-link' : 'inactive-link'}`} to="/service-orders" >
                  <FaClipboardList color="#fff" size="24" />
                  <p className={`${pathname.match('/service-orders') ? 'active-section' : 'inactive-section'}`} >Ordem de Serviço</p>
              </Link>

              <Link className={`${pathname.match('/clients') ? 'active-link' : 'inactive-link'}`} to="/clients" >
                  <BsFillPeopleFill color="#fff" size="24" />
                  <p className={`${pathname.match('/clients') ? 'active-section' : 'inactive-section'}`} >Clientes</p>
              </Link>

              <Link className={`${pathname.match('/products') ? 'active-link' : 'inactive-link'}`} to="/products" >
                  <Icon icon={washingMachine} color="#ffffff" width="24px" height="24px" />
                  <p className={`${pathname.match('/products') ? 'active-section' : 'inactive-section'}`} >Produtos</p>
              </Link>

              <Link className={`${pathname.match('/machine-parts') ? 'active-link' : 'inactive-link'}`} to="/machine-parts" >
                  <BsFillArchiveFill color="#fff" size="24" />
                  <p className={`${pathname.match('/machine-parts') ? 'active-section' : 'inactive-section'}`} >Peças</p>
              </Link>

              <Link className={`${pathname.match('/payments') ? 'active-link' : 'inactive-link'}`} to="/payments" >
                  <BsCreditCard color="#fff" size="24" />
                  <p className={`${pathname.match('/payments') ? 'active-section' : 'inactive-section'}`} >Pagamentos</p>
              </Link>

              <Link className={`${pathname.match('/configurations') ? 'active-link' : 'inactive-link'}`} to="/configurations" >
                  <BsGearFill color="#fff" size="24" />
                  <p className={`${pathname.match('/configurations') ? 'active-section' : 'inactive-section'}`} >Configurações</p>
              </Link>
          </div>
      </div>
    )   
}

export default SideBar