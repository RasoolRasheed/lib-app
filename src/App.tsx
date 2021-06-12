import React from 'react';
import './App.scss';
import Library from "./views/Library";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ReadingArea from './Components/ReadingArea/ReadingArea';
import { Row } from 'react-bootstrap';
import NavBar from './Components/NavBar/NavBar';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const App: React.FC = () => {
    return (
        <Router>
            <Row>
                <NavBar/>
            </Row>
            <Switch>
                <Route exact path="/">
                    <Library/>
                </Route>
                <Route exact path="/home">
                    <Library/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
