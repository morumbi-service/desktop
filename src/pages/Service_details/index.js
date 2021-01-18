import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { HiOutlineMailOpen, HiOutlinePrinter } from 'react-icons/hi'
import { motion, AnimatePresence } from "framer-motion";

import LogoHeader from './assets/LogoMB.svg'

import Datasheet from './components/Datasheet/index'

import "./styles.css"
import api from '../../services/api'

const ServiceDetails = () => {

    function onSuccess() {
        window.location.href='http://3.22.224.109:3333/uploads/technical_report.pdf'
    }

    const { id } = useParams()

    function handlePrint() {
        api.get(`/print-so/${id}`).then(response => {
            if (response && response.data) {
                onSuccess()
            }
        })
    }

    function handleSendEmail() {
        api.get(`/send-so/${id}`).then(response => {
            
        })
    }

    return (
        <>
        <div id="Service_Details">
                <div className="content">
                    <div className='header'>
                        <Link to="/home" >
                            <TiArrowBack size="40" color="#0B2545" />
                        </Link>
                        <img src={LogoHeader} alt=""/>
                        <div className="header-title">
                            <h2>Maria, veja os detalhes deste serviço.</h2>
                            <p>Detalhes do serviço.</p>
                        </div>
                    </div>

                    <div className="box">
                        <Datasheet />
                    </div>

                    <div className='buttons'>
                        <button className='first_button' onClick={handleSendEmail}>
                            <p>Enviar por Email</p>
                            <HiOutlineMailOpen size='24px' color='#f1f1f1' />
                        </button>

                        <button className='second_button' onClick={handlePrint}>
                            Imprimir
                            <HiOutlinePrinter size='24px' color='#f1f1f1' />
                        </button>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ServiceDetails;