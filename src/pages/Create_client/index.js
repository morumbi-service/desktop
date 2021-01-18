import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import InputMask from 'react-input-mask';
import api from '../../services/api';

import { BsArrowLeft } from 'react-icons/bs'

import './styles.css'
import axios from 'axios';

const CreateClient = () => {

  const [location, setLocation] = useState({})

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [cep, setCep] = useState('')
  const [complement, setComplement] = useState('')
  const [UF, setUf] = useState('')
  const [city, setCity] = useState('')

    const history = useHistory()

    function onSuccess() {
        history.push('/clients')
    }

    function handleGetByCep(ev) {
      const { value } = ev.target

      const cep = value.replace(/[^0-9]/g, '')

      if (cep.length !== 8) {
        setLocation({})
        return;
      } else {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          if(response && response.data) {
            setLocation(response.data)
            setAddress(response.data.logradouro)
            setNeighborhood(response.data.bairro)
            setCity(response.data.localidade)
            setUf(response.data.uf)
          }
        })
      }
    }

    async function handleRegisterClient(e) {
        e.preventDefault()

        const data = {
        name,
        cpf,
        whatsapp,
        telephone,
        email,
        address,
        number,
        neighborhood,
        cep,
        complement,
        UF,
        city,
        }

        console.log(data)

        try {
            await api.post('/client', data);

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
              <h2>Eba!! Novo cliente chegando.</h2>
              <p>Vamos cadastrar algumas informações?</p>
            </div>
          </div>

          <div className="main">
            <form onSubmit={handleRegisterClient}>
              <h2>Dados do Cliente</h2>
              <div className="field">
              <span>Nome completo</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="field">
                <span>CPF/CNPJ</span>
                <InputMask 
                  type="text" 
                  name="cpf" 
                  id="cpf" 
                  mask="999.999.999-99" 
                  maskChar={null}
                  onChange={e => setCpf(e.target.value)}
                />

                <div className="phones-input">
                  <div className="field">
                    <span>Whatsapp</span>
                    <InputMask 
                      type="text" 
                      name="whatsapp" 
                      id="whatsapp" 
                      mask="+55 (99) 99999-9999" 
                      maskChar={null}
                      onChange={e => setWhatsapp(e.target.value)}
                    />
                    </div>

                  <div className="field">
                    <span>Telefone</span>
                        <InputMask 
                            type="text" 
                            name="telephone" 
                            id="telephone" 
                            mask="(99) 99999999" 
                            maskChar={null}
                            onChange={e => setTelephone(e.target.value)}
                        />
                    </div>
                </div>

                <div className="field">
              <span>E-mail</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              </div>

              <h2>Localização</h2>

              <div className="second-layer">
                <div className="field">
                <span>CEP</span>
                  <input
                    type="text"
                    name="cep"
                    id="cep"
                    onBlur={handleGetByCep}
                    onChange={e => setCep(e.target.value)}
                  />
                </div>

                <div className="field">
                <span>Bairro</span>
                  <input
                    type="text"
                    name="neighborhood"
                    id="neighborhood"
                    value={location.bairro}
                    onChange={e => setNeighborhood(e.target.value)}
                  />
                </div>
              </div>

              <div className="first-layer">
                <div id="address" className="field">
                <span>Endereço</span>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={location.logradouro}
                    onChange={e => setAddress(e.target.value)}
                  />
                </div>
                
                <div id="number" className="field">
                <span>Número</span>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    onChange={e => setNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <span>Complemento</span>
                <input
                  type="text"
                  name="complement"
                  id="complement"
                  onChange={e => setComplement(e.target.value)}
                />

                <div className="third-layer">
                  <div id="uf" className="field">
                    <span>UF</span>
                    <select 
                        name="uf"  
                        id="uf" 
                        value={location.uf}
                        onChange={e => setUf(e.target.value)}
                    >
                      <option value="" hidden disabled selected >UF</option>
                      <option value="AC" >AC</option>
                      <option value="AL" >AL</option>
                      <option value="AP" >AP</option>
                      <option value="AM" >AM</option>
                      <option value="BA" >BA</option>
                      <option value="CE" >CE</option>
                      <option value="DF" >DF</option>
                      <option value="ES" >ES</option>
                      <option value="GO" >GO</option>
                      <option value="MA" >MA</option>
                      <option value="MT" >MT</option>
                      <option value="MS" >MS</option>
                      <option value="MG" >MG</option>
                      <option value="PA" >PA</option>
                      <option value="PB" >PB</option>
                      <option value="PR" >PR</option>
                      <option value="PE" >PE</option>
                      <option value="PI" >PI</option>
                      <option value="RJ" >RJ</option>
                      <option value="RN" >RN</option>
                      <option value="RS" >RS</option>
                      <option value="RO" >RO</option>
                      <option value="RR" >RR</option>
                      <option value="SC" >SC</option>
                      <option value="SP" >SP</option>
                      <option value="SE" >SE</option>
                      <option value="TO" >TO</option>
                    </select>
                  </div>

                  <div id="city" className="field">
                    <span>Cidade</span>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={location.localidade}
                        onChange={e => setCity(e.target.value)}
                      />
                  </div>
                </div>
              </div>

              <button id="cad-button" type="submit">Cadastrar</button> 
            </form>
          </div>
        </div>
      </div>
    )
}

export default CreateClient