import React, { useContext } from 'react';
import Todos from './components/Todo/Todos';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';
import Header from './components/UI/Header';
import { Context } from './Context';

function App() {
    const { username } = useContext(Context);
    return (
        <div className="App">
            {username && <Header username={username} />}
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
