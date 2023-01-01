import logo from './logo.svg';
import './App.css';
import React from 'react';
// import HeaderBottom from './Components/HeaderBottom';
// import GraphOverview from './Components/GraphOverview';
// import MovieProperties from './Components/MovieProperties';
// import TabsContainer from './Components/TabsContainer';
// import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Overview from './Overview';
import Movies from './Movies';
import Reporting from './Reporting';
import Users from './Users';
import Footer from './Components/Footer';
import Error from './Components/Error';
// import Chart from "react-apexcharts";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='overview' element={<Overview/>} />
        <Route path='movies' element={<Movies/>} />
        <Route path='reporting' element={<Reporting/>} />
        <Route path='users' element={<Users/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
