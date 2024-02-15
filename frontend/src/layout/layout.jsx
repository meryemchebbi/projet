import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Routers from '../routes/Routers';

const Layout = () => {
  return (
    <>
    <Header/>
    
      <div>
    <main>
        <Routers/>
    </main>
   
    
      <Footer/>
      </div>
      
    </>
  )
}

export default Layout
