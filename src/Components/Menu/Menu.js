import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

var menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link className="nav-link" to={to}>{label}</Link>
                    </li>
                );
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
                <a className="navbar-brand">CALL API</a>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((value, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={value.name}
                        to={value.to}
                        activeOnlyWhenExact={value.exact}
                    />
                );
            })
        }
        return result;
    }
}

export default Menu;