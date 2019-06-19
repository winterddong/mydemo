import React, { Component } from 'react'
import PropTypes from "prop-types"
class List extends Component {
    state = {  }
    handleClick=()=>{
        console.log('删除',this.props.index)
        this.props.deleteList(this.props.index)
    };
    render() { 
        return ( 
            <div>{this.props.name}---{this.props.content} <span onClick={this.handleClick}>删除</span> </div>
        );
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }
    
}

List.propTypes={
    content:PropTypes.string.isRequired,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
List.defaultProps = {
    name:'dong'
}
export default List;