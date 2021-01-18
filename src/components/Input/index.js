import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import './styles.css'

const Input = (props) => {
    return (
        <div className="searchClient">
                <input 
                    placeholder={props.title}
                    type="text"
                    name="searchClient"
                    id="searchClient"
                    autoCapitalize="false"
                    autoComplete="off"
                    // onChange={handleInputChange}
                />
                <RiSearchLine size="28" color="#0B2545" />
        </div>
    )
}

export default Input