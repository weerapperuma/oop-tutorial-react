import React from 'react'

function HeaderComponent(){
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-dark'>
                <a className="navbar-brand header-title" href="#">OOP TUTORIAL</a>
                <button className="btn btn-custom">Learn More</button>
            </nav>
        </header>
    </div>
  )
}
export default HeaderComponent