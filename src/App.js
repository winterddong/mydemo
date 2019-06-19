import React, { Component,Fragment} from 'react'
import {CSSTransition , TransitionGroup} from 'react-transition-group'

import List  from "./List.js"
import Boss  from "./Boss.js"

class App extends Component {
  state = { 
    inputVal:" ",
    list:['基础按摩','精油推背']
  }
  inputChange = (e)=>{
    let value = e.target.value

    this.setState({ 
      inputVal:value
    });
  };
  addList = ()=>{
    this.setState({ 
      list:[...this.state.list,this.state.inputVal],
      inputVal:""
    });
    
  };
  deleteData= (index)=>{

    let list = this.state.list;
    list.splice(index,1)
    this.setState({ 
      list
    });
  };
  render() { 
    return (
        <Fragment>
            <div>
                <label htmlFor="">加入服务：</label>
                <input className="input" type="text" value={this.state.inputVal} onChange={this.inputChange} />
                <button onClick={this.addList}>增加服务</button>
            </div>
            <ul>
            <TransitionGroup>
              {
                this.state.list.map((item,index)=>{
                  // return <li key={index}>{item}</li>

                  return <CSSTransition
                      timeout={1000}
                      classNames='boss-text'
                      unmountOnExit
                      appear={true}
                      key={index+item}  
                  >
                    <List key={index} content={item} index={index} deleteList={this.deleteData}/>
                  </CSSTransition>
                })
              }
            </TransitionGroup>
            </ul>
            <Boss/>
        </Fragment>
    );
  }
}

export default App;

