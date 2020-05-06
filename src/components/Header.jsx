import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Header.scss'

const Header = () => {
    console.log('Header 실행')
    return (
        <div className='header'>
            <ul>
                <li><Link to='/'>Main</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    )
}

export default Header;