import React, { Component } from 'react';
import CoronaContext from './MyContext';
import {getDataVirusCorona} from '../services/VirusAPI';

class CoronaProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            virus: [],

        }
    }
    async componentDidMount() {
        this.setState({
            loading: true
        })
        const data = await getDataVirusCorona();
        this.setState({
            loading: false,
            virus: data
        })
    }

    render() {
        console.log(this.state.virus);
        return (
            <CoronaContext.Provider value={this.state}>
                {this.props.children}
            </CoronaContext.Provider>
        );
    }
}

export default CoronaProvider;
