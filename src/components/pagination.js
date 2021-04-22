import React from 'react';
import {Row, Col, Pagination } from 'antd';

const PaginationMovie = ( {current, total, fdate, tdate, change} ) => {
    const arrTime = [fdate, tdate];

    return (
        <Row style={{ margin: '30px 0px' }}>
            <Col span={24} style={{ textAlign: 'center'}}>
                <Pagination current={current} total={total} pageSize={20} showSizeChanger={false} fdate={fdate} tdate={tdate} onChange={(p) => change(null, arrTime, p)}/>
            </Col>
        </Row>
    );
}

export default PaginationMovie;
