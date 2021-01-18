import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import './styles.css'

const Shortcut = (props) => {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        > 
        <Link to={props.link} >
            <div className="shortcut-button">
                <p className="text-button" >{props.title}</p>
                {props.children}
            </div>
        </Link>
        </motion.div>
        
    )
}

export default Shortcut