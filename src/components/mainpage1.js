import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css/Css.css'
import image from '../images/img.jpg'
const Mainpage1 = () => {
    return (

        <div className='bg' style={{ backgroundImage: `url(${image})` }}>
            <div className='bg2' >
                <Link to="/Secondpage">  
                <button className='bg3' type="button"  class="btn btn-primary">ENDE GRAMAM</button>              </Link>
                

            </div >
        </div >
    )
}

export default Mainpage1