import React, { Component } from 'react';
import './App.css';
import { HomePage } from './pages/home/homePage';

import { BrowserRouter, Route} from 'react-router-dom';
import ChoicePage from './pages/chooser/chooserPage';
import FinalPage from './pages/finalPage/finalPage';
import {LedTester} from "./pages/ledTester/ledTester";
import AdminPage from './pages/admin/admin';

class App extends Component {


    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage}/>
                        <Route path={process.env.PUBLIC_URL + '/choice/:key'} component={ChoicePage}/>
                        <Route path={process.env.PUBLIC_URL + '/final/:key'} component={FinalPage}/>
                        <Route path={process.env.PUBLIC_URL + '/ledTester'} component={LedTester}/>
                        <Route path={process.env.PUBLIC_URL + '/admin'} component={AdminPage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
