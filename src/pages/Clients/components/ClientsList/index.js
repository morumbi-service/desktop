import React from 'react';
import FadeIn from 'react-fade-in';
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
// styles
import './styles.css'

const ClientsList = (props) => {
    return (
        <FadeIn>
            <div id="Clients-list">
                <Link to={`/client/${props.client_id}`} >
                    <div className="clients-list-Card">
                        
                        <div className="clients-list-main">
                            <p>Nome: <b>{props.name}</b></p>
                            <p>Telefone: 
                                <b> {props.telefone}</b>
                            </p>
                            
                            <p>Rua: <b> {props.address}, {props.number} - {props.cep} - {props.UF}</b></p>
                        </div>
                        
                        <div className="clients-list-footer">
                            <p>Ver detalhes </p> <BsArrowRight size="24" color="var(--tertiary-color)" />
                        </div>
                    </div>
                </Link>
            </div>
        </FadeIn>
  );
}

export default ClientsList;