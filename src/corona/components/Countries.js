import React, { Component } from 'react';
import CoronaContext from '../context/MyContext';
import {Skeleton, Table} from 'antd';  

class Countries extends Component {
    render() {
        const columns = [
            {
              title: 'Country',
              dataIndex: 'Country',
              key: 'Country'
            },
            {
              title: 'New Confirmed',
              dataIndex: 'NewConfirmed',
              key: 'NewConfirmed'
            },
            {
              title: 'Total Confirmed',
              dataIndex: 'TotalConfirmed',
              key: 'TotalConfirmed'
            },
            {
              title: 'New Deaths',
              key: 'NewDeaths',
              dataIndex: 'NewDeaths'
            },
            {
              title: 'Total Deaths',
              dataIndex: 'TotalDeaths',
              key: 'TotalDeaths'
            },
            {
                title: 'New Recovered',
                dataIndex: 'NewRecovered',
                key: 'NewRecovered'
            },
            {
                title: 'Total Recovered',
                dataIndex: 'TotalRecovered',
                key: 'TotalRecovered'
              },
        ];
          
        const data = [
            {
                Country: "Afghanistan",
                NewConfirmed: 0,
                TotalConfirmed: 56093,
                NewDeaths: 0,
                TotalDeaths: 2462,
                NewRecovered: 0,
                TotalRecovered: 49681,
            },
           
        ];
          
        return (
          <CoronaContext.Consumer>
            {context => {
              if(context.loading || context.virus.length === 0) {
                return <Skeleton active />
              }
              return (
                <Table rowKey='s' columns={columns} dataSource={context.virus.Countries} />
              )
            }}
          </CoronaContext.Consumer>
        );
    }
}

export default Countries;
