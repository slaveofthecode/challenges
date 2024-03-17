import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <p>
            Made with <span role='img' aria-label='heart'>❤️</span> by{' '}
            <a href='https://slaveofthecode.vercel.app/' className='link' target='_blank' rel="noreferrer" >
                <strong>slaveofthecode</strong>
            </a>
        </p>
    </footer>
  )
}

export default Footer