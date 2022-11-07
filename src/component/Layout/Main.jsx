import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../component/Pages/Shared/Header';
import Footer from '../../component/Pages/Shared/Footer';


const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </div>
  );
};

export default Main;