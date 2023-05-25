import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import { AppProvider } from './Components/context';
import Home from './Pages/Home';
import Test from './Pages/Test';
import Results from './Pages/Results';
import Profile from './Pages/Profile';
import Learn from './Pages/Learn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <AppProvider>
            <BrowserRouter>
            <Routes>
                  <Route path='/' element={<App/>}>
                        <Route index element={<Home/>}/>
                        <Route path='Test' element={<Test/>}/>
                        <Route path='Results' element={<Results/>}/>
                        <Route path="Profile" element={<Profile/>}/>
                        <Route path="Learn" element={<Learn/>}/>
                  </Route>
            </Routes>
            </BrowserRouter>
      </AppProvider>
);


