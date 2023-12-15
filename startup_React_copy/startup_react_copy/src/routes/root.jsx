import { React, Fragment } from 'react'
import { Outlet, NavLink } from 'react-router-dom';

// Components
import CustomNavbar from '../components/CustomNavbar';
import CustomFooter from '../components/CustomFooter';
import Quote from '../components/Quote';


function App() {
  return (
    <Fragment>
        <CustomNavbar></CustomNavbar>
        <Quote></Quote>
        <Outlet />
        <CustomFooter></CustomFooter>
    </Fragment>
  );
}


export default App;

