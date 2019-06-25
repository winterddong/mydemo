import React,{useState,useEffect} from "react";
import Qs from 'qs'
import {finance_login} from "@/http/api"
import "./login.less"
import { message } from 'antd';
import 'antd/lib/message/style';
import  userImg from "../../assets/user.png"
import  pwdImg from "../../assets/pwd.png"




function Login(props){
    let [user,setUser]              =  useState("")
    let [pwd,setPwd]                =  useState("")
    let [pwdInfo,setPwdInfo]        =  useState("")
    let [userInfo,setUserInfo]      =  useState("")
    let [userStatus,setUserStatus]  =  useState(false)
    let [pwdStatus,setPwdStatus]    =  useState(false)
    
    console.log("TCL: Login -> handleVerity -> history", 2)
    useEffect(()=>{
        if(user.length){
            setUserInfo("")
            setUserStatus(true)
        }else{
            setUserStatus(false)
            // setUserInfo("请输入用户名")
        }
    },[user])
    useEffect(()=>{
        if(pwd.length){
            setPwdInfo("")
            setPwdStatus(true)
        }else{
            setPwdStatus(false)
            // setPwdInfo("请输入密码")
        }
    },[pwd])
    // const change = event=>{
    //     const value = event.target.value;
    //     const name  = event.target.name;
    //     if(name === "user"){
    //         setUser(value)
    //     }else{
    //         setPwd(value)
    //     }
    // }
    const handleVerity = async()=>{
        let history = props.history;
        if(user.length === 0){
            setUserInfo("请输入用户名")
            return false
        }else{
            setUserInfo("")
        }
        if(pwd.length=== 0){
            setPwdInfo("请输入密码")
            return false
        }else{
            setPwdInfo("")
        }
        if(userStatus&&pwdStatus){
            let params = {}
            params.username = user;
            params.password = pwd;
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
    return (
        <div id="login">
            <div className="login-content">
            <div className="content-main">
            
            <h2>衡哲财务系统</h2>
            <div className="loginForm">
                <div>
                    <label htmlFor="">
                        <span>
                            <img src={userImg} alt="" />
                        </span>
                        <input type="text" autoComplete="off" name="user" value={user} onChange={(event) =>{setUser(event.target.value)}}   placeholder="请输入账号" />
                    </label>
                    <p>{userInfo}</p>
                </div>

                <div>
                    <label htmlFor="">
                        <span>
                            <img src={pwdImg} alt="" />
                        </span>
                        <input
                            name="pwd"
                            value={pwd}
                            onChange={(event) =>{setPwd(event.target.value)}} 
                            type="password"
                            placeholder="请输入密码"
                        />
                    </label>
                    <p>{pwdInfo}</p>

                </div>
                <button className={userStatus&&pwdStatus?"activeLogin":null} onClick={handleVerity} >登 录</button>

            </div>
            </div>

            </div>
        </div>
    );
}

export default Login