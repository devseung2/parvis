import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Header } from './components/index'
import { Main, Login } from './pages/index'
import './App.scss'

const App = () => {
    console.log('App 실행')
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route path="/login" component={Login}></Route>
            </Switch>
        </Router>
    )
}

export default App;