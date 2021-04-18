import React, { Component } from 'react';
import {Row, Col} from 'antd';
import Global from './components/Global';
import Countries from './components/Countries';
import CoronaProvider from './context/CoronaProvider';
class App extends Component {
    render() {
        return (
            <Row>
                <Col span={20} offset={2}>
                    <CoronaProvider>
                        <Global></Global>
                        <Countries></Countries>
                    </CoronaProvider>
                </Col>
            </Row>
        );
    }
}

export default App;
