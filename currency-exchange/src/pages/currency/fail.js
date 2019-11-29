import React, {Component, useState} from "react";
// import { Link } from "react-router-dom";
import axios from 'axios';
import "./currency.css";
import { Container, Row, Col } from 'reactstrap';


class Currency extends Component {   
    constructor() {
        super();
        this.state ={ rates: [] };
    }  
    componentDidMount(){
        axios.get('https://api.openrates.io/latest?base=USD')
        .then( response => { console.log(response.data.rates)})
            // this.setState({ rates: response.data.rates })
        .then(response => response.json() )
        // .then( console.log('zebra',response) )
        .then( ({results: rates}) => this.setState({rates}))
        .catch(error => {
            console.log(error)
        })
    }
    
    
    render() {
        let rates = this.state;
        // console.log('zebra', rates)
        return (
            <div>

                <h1>hello for now</h1>
                <div id='allRatesContainer'>
                    <p src={rates} />
                    {/* {rates.map(rate => <p>{rate}</p>)} */}
                </div>

            </div>
        )
    }
}

export default Currency;
// open rates api