import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import InputMask from 'react-input-mask';
import api from '../../services/api';

import { BsArrowLeft } from 'react-icons/bs'

import './styles.css'

const CreateClient = () => {

    const [clients, setClients] = useState([])

    useEffect(() => {
        api.get('/clients').then((response) => {
            if(response && response.data) {
                setClients(response.data)
            }
        })
    })

    const history = useHistory()

    function onSuccess() {
        history.push('/service-orders')
    }

    const [client_id, setClient] = useState('')
    const [product, setProduct] = useState('')
    const [color, setColor] = useState ('')
    const [brand, setBrand] = useState('')
    const [usage_time, setUsageTime] = useState('')
    const [defect, setDefect] = useState('')
    const [model, setModel] = useState('')
    const [series, setSeries] = useState('')
    const [delivery_date, setDeliveryDate] = useState('')
    const [voltage, setVoltage] = useState('')
    const [emission, setEmission] = useState('')

    async function handleCreateSO(e) {
      e.preventDefault()

      const data = {
        client_id, 
        product,
        color,
        brand,
        usage_time,
        defect, 
        model,
        series, 
        delivery_date,
        voltage,
        emission,
      }

      try {
        await api.post('/service', data)

        onSuccess()
        } catch (err) {
            console.log(err);
            alert("Erro no cadastro, tente novamente");
        }
      }

    return (
        <div id='Add-client'>
        <div className='content'>
          <div className='header'>
            <Link to="/home" >
              <BsArrowLeft size="40" color="#0B2545" />
            </Link>
            <div className="header-title">
              <h2>Opa!! Serviço chegando.</h2>
              <p>Vamos cadastrar algumas informações?</p>
            </div>
          </div>

          <div className="main">
            <form onSubmit={handleCreateSO}>
              <h2>Cliente</h2>

                <div id="client" className="field">
                    <select 
                        name="client"  
                        id="client" 
                        onChange={e => setClient(e.target.value)}
                    >
                      <option value="" hidden disabled selected >Selecionar Cliente</option>
                      {clients.map(client => (
                        <option value={client.client_id}>
                            {client.client_id} - {client.name}  ({client.cpf})
                        </option>
                      ))}
                    </select>
                </div>

              <h2>Sobre o serviço</h2>
              <div className="second-layer">
                <div id="address" className="field">
                <span>Produto</span>
                  <input
                    type="text"
                    name="product"
                    id="product"
                    onChange={e => setProduct(e.target.value)}
                  />
                </div>
                
                <div id="number" className="field">
                <span>Cor</span>
                  <input
                    type="text"
                    name="color"
                    id="color"
                    onChange={e => setColor(e.target.value)}
                  />
                </div>
              </div>

            <div className="second-layer">
                <div className="field">
                <span>Marca</span>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    onChange={e => setBrand(e.target.value)}
                  />
                </div>
                
                <div className="field">
                <span>Tempo de Uso</span>
                  <input
                    type="text"
                    name="usage_time"
                    id="usage_time"
                    onChange={e => setUsageTime(e.target.value)}
                  />
                </div>
            </div>

                <div className="field">
                <span>Defeito</span>
                  <input
                    type="text"
                    name="defect"
                    id="defect"
                    onChange={e => setDefect(e.target.value)}
                  />
                </div>

                <div className="field">
                <span>Série</span>
                  <input
                    type="text"
                    name="series"
                    id="series"
                    onChange={e => setSeries(e.target.value)}
                  />
                </div>

                <div className="field">
                <span>Modelo</span>
                  <input
                    type="text"
                    name="model"
                    id="model"
                    onChange={e => setModel(e.target.value)}
                  />
                </div>

                <div className="second-layer">

                    <div className="field">
                    <span>Voltagem</span>
                    <InputMask
                        type="text"
                        name="voltage"
                        id="voltage"
                        mask="999v"
                        maskChar={null}
                        onChange={e => setVoltage(e.target.value)}
                    />
                    </div>
                </div>

                <div className="second-layer">

                    <div className="field">
                    <span>Data de Emissão</span>
                    <InputMask
                        type="text"
                        name="emission"
                        id="emission"
                        mask="99/99/9999" 
                        maskChar={null}
                        onChange={e => setEmission(e.target.value)}
                    />
                    </div>

                    <div className="field">
                    <span>Data de Entrega</span>
                    <InputMask
                        type="text"
                        name="delivery_date"
                        id="delivery_date"
                        mask="99/99/9999" 
                        maskChar={null}
                        onChange={e => setDeliveryDate(e.target.value)}
                    />
                    </div>
                </div>

              <button id="cad-button" type="submit">Criar</button> 
            </form>
          </div>
        </div>
      </div>
    )
}

export default CreateClient