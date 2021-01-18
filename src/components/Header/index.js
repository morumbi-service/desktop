import React from 'react'

import './styles.css'

const Header = (props) => {
    return (
        <header>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </header>
    )
}

export default Header