import React from 'react';
import Dashboard from './Budget/Dashboard';
import Blogs from './Blogs/Blogs';
import MenuBar from './NavBar/MenuBar';

const Home = () => {
  return (
    <body>  
      <MenuBar/> 
      <Dashboard/>
      <Blogs/>
    </body>
  );
};

export default Home;
