import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './test.less'
// import {App,Login,Hello,NodeList,MyComponent,LikeButton,Input,Life,UserGist,RepoLlst,Avatar} from './App';
//import Login from './page/login/login.js';
import MyRouter from './router';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
// <NodeList>
//     <span>cuidongdong</span>
//     <span>zhujialin</span>
// </NodeList>,document.getElementById('root'));

ReactDOM.render(<MyRouter/>,document.getElementById('root'));

// ReactDOM.render(<MyComponent/>,document.getElementById('root'));

// ReactDOM.render(<LikeButton/>,document.getElementById('root'));

// ReactDOM.render(<Input/>,document.getElementById('root'));

// ReactDOM.render(<Life name="dong"/>,document.getElementById('root'));

// ReactDOM.render(<UserGist soucre="https://api.github.com/users/octocat/gists"/>,document.getElementById('root'));

// ReactDOM.render(<RepoLlst promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}/>,document.getElementById('root'));

// ReactDOM.render(<Avatar username="dong" />,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
