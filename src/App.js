import React from 'react';
import $ from 'jquery';
import { render } from 'react-dom';
// import logo from './logo.svg';
import './App.css';

function App() {
  var arr = [
    <h1 key="1">Hello world!</h1>,
    <h2 key="2">React is awesome</h2>,
  ];
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <code>hello react</code>
        
    //   </header>
    // </div>
    <div>
        {
          arr
        }
    </div>
  );
}

console.log(render,'renderrenderrender')

class Hello extends React.Component{
  render(){
    return <h1>hello {this.props.name}</h1>
  }
}


class NodeList extends React.Component{
  render(){
    return( 
      <ol>
        {
          React.Children.map(this.props.children,function(child){
              return <li>{child}</li>
          })
        }
      </ol>
    )
  }
}

// class MyTitle extends React.component{
  
//     static propTypes = {
//       title: PropTypes.string.isRequired,
//     }
//     render(){
//       return <h1>{this.props.title}</h1>;
//     }

// }
/*****
React.createRef()
在React 16.3版本后，使用此方法来创建ref。将其赋值给一个变量，通过ref挂载在dom节点或组件上，该ref的current属性
将能拿到dom节点或组件的实例
*****/
class MyComponent extends React.Component{
  
  constructor(props){
    super(props);
    this.myTextInput  = React.createRef();
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.myTextInput.current.focus();
  }
  render(){
    return (
      <div>
        <input type="text" ref={this.myTextInput} />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    )
  }
}


class LikeButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLike : false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      isLike:!this.state.isLike
    })
  }
  render(){
    var text = this.state.isLike ? '冬冬' : '西西';
    return (
      <p onClick={this.handleClick}>
        我在切换{text}
      </p>
      
    );

  }
}


class Input extends React.Component{

  constructor(props){
    super(props);
    this.state  = {
      value : "dong"
    }
    this.handleChange  = this.handleChange.bind(this)

  }

  handleChange(event){
    this.setState({
      value:event.target.value
    })
  }

  render(){
    var value = this.state.value
    return(
      <div  >
            <input  value={value} onChange={this.handleChange} />
            <p>{value}</p>
      </div>
    )
  }


}



class Life extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      opacity:1.0
    }

  }

  componentDidMount(){
    this.timer = setInterval(function(){
      let opacity = this.state.opacity
      opacity -=.05
      if(opacity<0.1){
        opacity=1.0
      } 
      this.setState({
        opacity :opacity
      })
    }.bind(this),100)
  }

  render(){
    return (
      <div style={{opacity:this.state.opacity}}>
        hello,{this.props.name}
      </div>
    )
  }
}



class UserGist  extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user:"",
      lastUrl:""
    }
  }
  componentDidMount(){
    $.get(this.props.soucre,function(res){
    console.log("TCL: UserGist -> componentDidMount -> res", res)
      
      let lastUrl = res[0]
      this.setState({
        user:lastUrl.owner.login,
        lastUrl: lastUrl.html_url
      })
    }.bind(this))
  }

  render(){
    return (
      <div>
        {this.state.user}===>>>>'s last gist is <a href={this.state.lastUrl}>here</a>.
      </div>
    )
  }
}


class  RepoLlst extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null
    };
  }
  componentDidMount() {
    this.props.promise.then(
      value =>{ console.log(value,'value');this.setState({loading: false, data: value})},
      error => this.setState({loading: false, error: error}
    ));
  }

  render(){
    if(this.state.loading){
      return <span>loading</span>
    }else if(this.state.error !==null ){
      return <span>Error:{this.state.error.message}</span>
    }else{
      var repos = this.state.data.items;
      var repoList = repos.map(function(repo,index){
        return <li key={index}><a href={repo.html_url}>{repo.name}</a>{repo.stargazers_count}<br/>{repo.description}</li>
      })
      return <main>
        <h1>Most Popular JavaScript Projects in Github</h1>
        <ol>{repoList}</ol>
      </main>
    }
  }


}

const ProfilePic = (props) => {
  return (
    <img src={'http://graph.facebook.com/' + props.username + '/picture'} />
  );
}

const ProfileLink = (props) => {
  return (
    <a href={'http://www.facebook.com/' + props.username}>
      {props.username}
    </a>
  );
}

const Avatar = (props) => {
  return (
    <div>
      <ProfilePic username={props.username} />
      <ProfileLink username={props.username} />
    </div>
  );
}





export{App,Hello,NodeList,MyComponent,LikeButton,Input,Life,UserGist,RepoLlst,Avatar}

// export default Hello;
