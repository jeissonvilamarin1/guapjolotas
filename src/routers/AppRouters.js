import React, { Component } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';

export default class AppRouters extends Component {
    render() {
        return (
          <div>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/Hero" element={<Hero />} />
              </Routes>
            </BrowserRouter>
          </div>
        );
    }
}
