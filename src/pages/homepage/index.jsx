import React from 'react'
import Nav from '../../components/nav'
import './homepage.styles.scss'

const HomePage = () => {

  return (
    <div className='home-box'>
      <h1 className='title'>Lets Win Some Money!!!</h1>
      <Nav />
      <div className='give-credit'>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

export default HomePage
