import React, {Component, useState} from "react";
// import { Link } from "react-router-dom";
import axios from 'axios';
import "./currency.css";
import { Container, Row, Col } from 'reactstrap';


class Background extends Component {   
    constructor() {
        super();
        this.state ={ currentRates: [] };
    }     
    componentDidMount(){
        fetch('http://api.openrates.io/latest?base=USD')
        .then(response => response.json() )
        .then( ({results: currentRates}) => this.setState({currentRates}))
        }
     
                      
    render() {
        let currentRates = this.state.currentRates
        return (
            <div>

                <h1>hello for now</h1>
                <div id='allRatesContainer'>
                    {currentRates.map(rate => <p>{rate.name}</p>)}
                </div>

            </div>
        )
    }
}

export default Background;