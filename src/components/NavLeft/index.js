import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "antd";
import logo from "@/assets/logo.png";
import { finance_menuList } from "@/http/api";

import "./index.less";

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
    state = {
        openKeys: [],
    };
    rootSubmenuKeys = [];
    onOpenChange = openKeys => {
    console.log("TCL: openKeys", openKeys)
    console.log("TCL: rootSubmenuKeys", this.rootSubmenuKeys)

        
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({
                openKeys
            });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    };
    renderMenu = data => {
        return data.map(item => {
            if (item.children) {
                this.rootSubmenuKeys.push(item.url)
                return (
                    <SubMenu title={
                        <span>
                            <Icon type="setting" />
                            <span>{item.title}</span>
                        </span>
                    } key={item.url}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
            return (
                <Menu.Item title={item.title} key={item.url}>
                    <NavLink to={item.url}> {item.title} </NavLink>
                </Menu.Item>
            );
        });
    };
    componentWillMount() {
        finance_menuList().then(data => {
            console.log(data, "----");
            if (data && data.success) {
                console.log(
                    "TCL: NavLeft -> componentWillMount ->  data.result",
                    data.result
                );
                let openKeys = []
                openKeys.push(data.result[0].url)
                this.setState ({
                    openKeys
                })
                
                const MenuTreeNode = this.renderMenu(data.result);
                this.setState({
                    MenuTreeNode
                });
            }
        });
    }
    componentDidMount() { }

    render() {
        return (
            <div className="navLeft">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <Menu
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    {this.state.MenuTreeNode}
                </Menu>
            </div>
        );
    }
}
