import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../../services/api'

import Logo from '../../assets/Logo.svg'

import "./styles.css"

const Datasheet = () => {

    const { id } = useParams()
    const [service, setService] = useState({});
    const [client, setClient] = useState({})

    useEffect(() => {
        api.get(`/service/${id}`).then((response) => {
            if (response && response.data) {
                setService(response.data.serviceOrder)
                setClient(response.data.client)
            }
        })
    })

    return (
        <>
            <div class="menu_header">
                <div class="header_item1">
                    <p>Autorizada:</p>
                    <p>Morumbi Service LTDA</p>
                    <p>Av. Duquesa de Goiás, 876</p>
                    <p>Telefone: (11) 3758-4656 | 3758-3107</p>
                    <p>CNPJ: 138906700001-72</p>
                </div>
                <img src={Logo} alt="" />
            </div>

            <div class="sub_header">
                <div class="sub_header1">
                    <b>Número da OS</b>
                    <p>{service.SO_id}</p>
                </div>
                <div class="sub_header2">
                    <b>Técnico</b>
                    <p>Ronaldo da Silva Ribeiro</p>
                </div>
                <div class="sub_header3">
                    <p>Data de Entrega: {service.delivery_date}</p>
                    <p>Data de Emissão: {service.emission}</p>
                </div>
            </div>

            <div class="client_details">
                <div class="client_details1">
                    <p>Consumidor: {client.name}</p>
                    <p>Endereço: {client.address}, {client.number}</p>
                    <p>Complemento: {client.complement}</p>
                    <p>CNPJ/CPF: {client.cpf}</p>
                    <p>Telefone Residêncial: {client.telephone}</p>
                    <p>Telefone (Outros): {client.whatsapp}</p>
                    <p>E-mail: {client.email}</p>
                </div>
                <div class="client_details2">
                    <p>CEP: {client.cep}</p>
                    <p>UF: {client.UF}</p>
                    <p>Bairro: {client.neighborhood}</p>
                    <p>Cidade: {client.city}</p>
                </div>
            </div>

            <div class="product_details">
                <div class="product_details1">
                    <p>Produto: {service.product}</p>
                    <p>Série: {service.series}</p>
                    <p>Marca: {service.brand}</p>
                </div>
                <div class="product_details2">
                    <p>Cor: {service.color}</p>
                    <p>Voltagem: {service.voltage}</p>
                    <p>Tempo de Uso: {service.usage_time}</p>
                </div>
            </div>

            <div class="claimed_defect">
                <p>Defeito Reclamado</p>
                <div class="claimed_defect1">
                    <p>{service.defect}</p>
                </div>
            </div>

            <div class="technical_report">
                <p>Laudo Técnico</p>
                <div class="technical_report1">
                    <p>{service.report}</p>
                </div>
            </div>

            <div class="chart">
                {service.note ?
                    <span>
                        <b>Observação</b>
                        <p>{service.note}</p>
                    </span> :
                    ''
                }

                <div class="chart1">
                    <span>
                        <b>Mão de Obra</b>
                        <p>R$ {service.labor}</p>
                    </span>
                    <span>
                        <b>Total de Orçamento</b>
                        <p>R$ {service.total}</p>
                    </span>
                </div>
            </div>

            <div class='auth_box'>
                <div class="budget">
                    <p>Orçamento</p>
                    <p>O Orçamento é válido por 3 dias, após esse prazo o mesmo estará sujeito a modificações.</p>
                </div>

                <div class="authorization">
                    <div class="authorization1">
                        <p>Autorização</p>
                        <p>Eu autorizo a realização do serviço, bem como a troca de peças, conforme o presente diagnóstico e/ou orçamento técnico, tendo recebido orientações necessárias.</p>
                    </div>
                    <div class="authorization2">
                        <p>Data da Aprovação: </p>
                        <p>Assinatura do Consumidor: </p>
                    </div>
                </div>
            </div>

            <div class="warranty">
                <p>Termo de Garantia do Serviço Autorizado</p>
                <span>Conforme descrito no orçamento já aprovado, firmamos a garantia do serviço (mão de obra) de assistência técnica por um período de &emsp; &emsp; &emsp; &emsp; &emsp; e das peças aplicadas por um período de &emsp; &emsp; &emsp; &emsp; &emsp; , a partir de &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; (data de conclusão), quando o serviço foi devidamente executado, estando em perfeitas condições de utilização, excluem-se da garantia os defeitos causados por uso impróprio.</span>
            </div>

        </>
    )
}

export default Datasheet;