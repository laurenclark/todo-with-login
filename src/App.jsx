import React from 'react';
import Todos from './components/Todo/Todos';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>

                <Route path="/todos">
                    <Todos />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
