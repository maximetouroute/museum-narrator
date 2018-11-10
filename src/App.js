import React, { Component } from 'react';
import './App.css';
import { HomePage } from './pages/home/homePage';

import { BrowserRouter, Route} from 'react-router-dom';
import ChoicePage from './pages/chooser/chooserPage';

class App extends Component {


    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage}/>
                        <Route path={process.env.PUBLIC_URL + '/choice/:key'} component={ChoicePage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
