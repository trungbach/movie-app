import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import {Link, useLocation, useHistory} from 'react-router-dom';
import {helper} from '../helper/common';

const { Header } = Layout;
const DivLogo = styled.div`
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
`;

const HeaderMovie = () => {
    const {pathname} = useLocation();
    const info = helper.decodeTokenLocalStorage();
    const username = info ? (info.username || null) : null;
    const history = useHistory();
    const logoutUser = () => {
        helper.removeToken();
        // quay ve login
        history.push('/login');
    }

    return (
        <Header>
            <DivLogo />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
                <Menu.Item key="/search">
                    <Link to='./search'>Search</Link> </Menu.Item>
                <Menu.Item key="/popular-movie">
                    <Link to='/popular-movie'> Popular movie</Link></Menu.Item>
                <Menu.Item key="/up-coming">
                    <Link to='/up-coming'>Upcoming</Link>
                </Menu.Item>
                {info === null && (
                    <Menu.Item key="/login">
                        <Link to='/login'>Login</Link>
                    </Menu.Item>
                )}
                {info !== null && (
                    <Menu.Item>
                        <span>Hi: {username}</span>
                    </Menu.Item>
                )}
               
                {info !== null && (
                   <Menu.Item onClick={() => logoutUser()}>
                        Logout
                   </Menu.Item>
                )}
                
            </Menu>
        </Header>
    );
}

export default React.memo(HeaderMovie);
