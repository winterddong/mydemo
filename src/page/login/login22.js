import React from "react";
import Qs from 'qs'
import {finance_login} from "@/http/api"
import "./login.less"
import { message } from 'antd';
import 'antd/lib/message/style';
import  user from "../../assets/user.png"
import  pwd from "../../assets/pwd.png"


export default class Login extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state={
    //         user:'',
    //         pwd:"",
    //         userInfo:"",
    //         pwdInfo:"",
    //         userStatus:false,
    //         pwdStatus:false,
    //     };
    // }
    state={
        user:'',
        pwd:"",
        userInfo:"",
        pwdInfo:"",
        userStatus:false,
        pwdStatus:false,
    };
    
    handleInputChange=event=>{
        const value = event.target.value;
        const name  = event.target.name;
        console.log("TCL: Login -> value", name,value)

        this.setState({
            [name]: value
        },()=>{

            if(this.state[name].length === 0){
                this.setState ({
                    [name+"Status"]:false
                }) 
                
            }else{
                this.setState ({
                    [name+"Status"]:true,
                    [name+"Info"]:''
                }) 

            }
        });
    

    };
    handleVerity= async ()=>{
        if(this.state.user.length === 0){
            this.setState ({
                userInfo:"请输入用户名",
                
            }) 
            return false
        }else{
            this.setState ({
                userInfo:"",
            }) 
        }
        if(this.state.pwd.length === 0){
            this.setState ({
                pwdInfo:"请输入密码",
            }) 
            return false
        }else{
            this.setState ({
                pwdInfo:"",
            }) 
        }
        let history = this.props.history;
        console.log("TCL: Login -> handleVerity -> history", this.props)
        if(this.state.userStatus&&this.state.pwdStatus){
            let params = {}
            params.username = this.state.user;
            params.password = this.state.pwd;
            try{
                let result = await finance_login(Qs.stringify(params))
                if(result.code === 200 ){

                    sessionStorage.setItem('token',result.result.token)
                    sessionStorage.setItem('userInfo', JSON.stringify(result.result.userInfo))
                    message.success("登录成功")
                    history.push('/indexPage')
                }else{
                    message.error(result.message)
                    
                }
            }catch(error){
                console.log("TCL: Login -> handleVerity -> error", error)
                
            }


        }



    };
    render() {
        return (
            <div id="login">
                <div className="login-content">
                <div className="content-main">
                
                <h2>衡哲财务系统</h2>
                <div className="loginForm">
                    <div>
                        <label htmlFor="">
                            <span>
                                <img src={user} alt="" />
                            </span>
                            <input type="text" autoComplete="off" name="user" value={this.state.user} onChange={this.handleInputChange}  placeholder="请输入账号" />
                        </label>
                        <p>{this.state.userInfo}</p>
                    </div>

                    <div>
                        <label htmlFor="">
                            <span>
                                <img src={pwd} alt="" />
                            </span>
                            <input
                                name="pwd"
                                value={this.state.pwd}  onChange={this.handleInputChange}
                                type="password"
                                placeholder="请输入密码"
                            />
                        </label>
                        <p>{this.state.pwdInfo}</p>

                    </div>
                    <button className={this.state.userStatus&&this.state.pwdStatus?"activeLogin":null} onClick={this.handleVerity} >登 录</button>

                </div>
                </div>

                </div>
            </div>
        );
    }
}
