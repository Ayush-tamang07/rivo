import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-around overall-text'>
        <h1 className='text-2xl'>Rivo</h1>
        <nav className=''>
            <ul className='flex gap-11'>
                <li>Home</li>
                <li>Shop</li>
                <li>Features</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div>

        </div>
    </header>
  )
}

export default Header