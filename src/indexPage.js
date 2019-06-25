import React from 'react'
import { Row } from 'antd';
import NavLeft from './components/NavLeft'

// import Header from './components/Header'
// import Footer from './components/Footer'
// import './style/common.less'


export default class IndexPage extends React.Component {

    render() {
        return (
            <Row className="container">
                <div  className="nav-left">
                    <NavLeft />
                </div>
                <div className="main">
                    {/* <Header></Header> */}
                    <Row className="content">
                        {this.props.children}   
                    </Row>
                    {/* <Footer></Footer> */}
                </div>
            </Row>
        )
    }
}