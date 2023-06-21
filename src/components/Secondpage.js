
import React from 'react'
import '../styles.css/Css.css'
import { Link } from 'react-router-dom'
import imag from '../images/second.jpg'
const Secondpage = () => {
    return (
        <div className='second' style={{ backgroundImage: `url(${imag})` }}>
            <div >

                <Link to="/thridpage">
                    <button className='aaz' type="button" >PROJECT APPLICATION</button>
                </Link>
            </div>
            <div >
            
                    <button className='ccz' type="button" >LABOUR BANK</button>
            
            </div>

            <div >
                <button className='aaz' type="button" >COMPLAINT REGISTRATION</button>
            </div>
            <div >
                <button className='ccz' type="button" >PRODUCT DETAILS</button>
            </div>


        </div>
    )
}

export default Secondpage;