import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
    state = { 
        isShow:true
    }
    toToggole = ()=>{
        this.setState({
            isShow:!this.state.isShow 
        })
    }
    render() { 
        return ( 
            
            <div>
                <CSSTransition in={this.state.isShow}   //用于判断是否出现的状态
                timeout={2000}           //动画持续时间
                classNames="boss-text"
                unmountOnExit >
                <div >BOSS级人物-孙悟空</div>
                </CSSTransition>
                <div><button onClick={this.toToggole}>召唤Boss</button></div>
                
            </div>
        );
    }
}
 
export default Boss;