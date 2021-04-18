import React, { Component } from 'react';
import { Card, Col, Row, Skeleton } from 'antd';
import CoronaContext from '../context/MyContext';

class Global extends Component {

    render() {
        return (
            <>
                <CoronaContext.Consumer>
                    {context => {
                        console.log(context);
                        if(context.loading || context.virus.length === 0) {
                            return (
                                <Skeleton active />
                            )
                        }
                        return (
                            <div className="site-card-wrapper">
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Card title="Confirmed" bordered={true}>
                                            <p>New Confirmed: {context.virus.Global.NewConfirmed}</p>
                                            <p>Total Confirmed: {context.virus.Global.TotalConfirmed}</p>
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="Death" bordered={true}>
                                            <p>New Death: {context.virus.Global.NewDeaths}</p>
                                            <p>Total Death: {context.virus.Global.TotalDeaths}</p>                        
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="Recovery" bordered={true}>
                                            <p>New Recovery: {context.virus.Global.NewRecovered}</p>
                                            <p>Total Recovery: {context.virus.Global.TotalRecovered}</p>                        
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        )
                        }
                    }
                </CoronaContext.Consumer>
            </>
        );
    }
}

export default Global;
