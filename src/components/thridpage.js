
import React from 'react'
import '../styles.css/Css.css'
import { Link } from 'react-router-dom'
import imagee from '../images/third.jpg'
const Thirdpage = () => {
    return (
        <div className='thrid' style={{ backgroundImage: `url(${imagee})` }}>
            <div >
                <Link to="/forthpage"> <button className='one' type="button" >Agriculture Sector</button></Link>
            </div>
            <div >
            <Link to="/forthpage"><button className='two' type="button" >Animal Husbandry</button></Link>
            </div>
            <div >
            <Link to="/forthpage"><button className='three' type="button" >Buidings</button></Link>
            </div>
            <div >
            <Link to="/forthpage"><button className='four' type="button" >Water</button></Link>
            </div>
            <div>
            <Link to="/back">  <button className='five' type="button" >back</button></Link>
            </div>
        </div >
    )
}

export default Thirdpage