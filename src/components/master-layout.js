import React from 'react';
import HeaderMovie from './Header';
import FooterMovie from './Footer';
import { Layout } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const { Content } = Layout;
const SideLayoutContent = styled.div`
    min-height: 280px;
    padding: 24px;
    background: #fff;
`;
const MasterLayoutMovie = (props) => {
    return (
        <Layout>
            <HeaderMovie />
            <Content style={{ padding: '0 50px' }}>
                <SideLayoutContent>
                    {props.children}
                </SideLayoutContent>
            </Content>
            <FooterMovie />
        </Layout>
    )
}
MasterLayoutMovie.propTypes = {
    children: PropTypes.node.isRequired
}
export default React.memo(MasterLayoutMovie);