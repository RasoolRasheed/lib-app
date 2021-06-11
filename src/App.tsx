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
                    <ReadingArea/>
                </Route>
                <Route path="/contact">
                    {/*<Dashboard/>*/}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
