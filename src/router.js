import React from 'react'
import App from './App'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./page/login/login.js"
import Home from "./page/home"
import IndexPage from "./indexPage.js"


export default class MyRouter extends React.Component{
    render(){
        return (
            <Router>
                <App>
                    
                    {/* <Switch>
                        <Route path="/" render={()=>
                            <Switch>
                                <Route path="/" exact  component={Login}></Route>
                                <IndexPage>
                                    <Switch>
                                        <Route path="/indexPage"  component={Home}></Route>
                                    </Switch>
                                </IndexPage>
                            </Switch>
                        } />
                    </Switch>  */}

                    <Switch>
                        <Route path="/" exact  component={Login}></Route>
                        <IndexPage>
                            <Switch>
                                <Route path="/indexPage"  component={Home}></Route>
                            </Switch>
                        </IndexPage>
                    </Switch>
                </App>
            </Router>
        )
    }
}
