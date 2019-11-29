import React, { Component } from "react";
import {Link} from "react-router-dom";
import './currency.css';
import { Container, Row, Col } from 'reactstrap';
import axios from'axios'



class Currency extends Component {
    constructor(props){
        super(props);
        this.state = {
            subject: "react state",
            instructor: "Lukas",
            purpose: "to make stacks",
            data: {},
            isGreater: false,
            isLess: false,
            isSpecial: false
            // queryUrl: "https://api.exchangeratesapi.io/latest?base=USD"
        };
    }
    componentDidMount(){
        axios.get('https://api.exchangeratesapi.io/latest?base=USD')
            .then(response => {
                if (response.data.rates.hasSpecialStuff) {
                    this.setState({
                        data: response.data.rates,
                        isSpecial: true
                    })
                }
                this.setState({
                    data: response.data.rates
                })
            })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Container id='USDcon'>
                            <div className='conHead'>
                                <h3 className='conHeadText'>Current USD rates</h3>
                            </div>
                            <div id="fixedRatesDiv">
                                {Object.keys(this.state.data).map(key => <p className={'rateP'} style={this.state.isSpecial ? {backgroundColor: "red"} : {backgroundColor: "transparent"}}>{`${key}, ${this.state.data[key]}`}</p>)}
                            </div>
                        </Container>
                    </Col>
                    <Col>
                        <Container id='searchCon'>
                            <div className='conHead'>
                                <h3 className='conHeadText'>Compare rates</h3>
                                
                        <label >Base Currency: </label>
                                <input className='baseInput' list="base-currency" id="baseCurrencyChoice" name="base-currency-choice" />
                                <datalist id="base-currency">
                                <option value="AUD"/>
                                <option value="GBP"/>
                                <option value="JPY"/>
                                <option value="CHF"/>
                                <option value="USD"/>
                                <option value="AFN"/>
                                <option value="ALL"/>
                                <option value="DZD"/>
                                <option value="AOA"/>
                                <option value="ARS"/>
                                <option value="AMD"/>
                                <option value="AWG"/>
                                <option value="AUD"/>
                                <option value="EUR"/>
                                <option value="AZN"/>
                                <option value="BSD"/>
                                <option value="BHD"/>
                                <option value="BDT"/>
                                <option value="BBD"/>
                                <option value="BYR"/>
                                <option value="BZD"/>
                                <option value="BMD"/>
                                <option value="BTN"/>
                                <option value="BOB"/>
                                <option value="BAM"/>
                                <option value="BWP"/>
                                <option value="BRL"/>
                                <option value="GBP"/>
                                <option value="BND"/>
                                <option value="BGN"/>
                                <option value="BIF"/>
                                <option value="KHR"/>
                                <option value="CAD"/>
                                <option value="KYD"/>
                                <option value="CLP"/>
                                <option value="CNY"/>
                                <option value="COP"/>
                                <option value="KMF"/>
                                <option value="CDF"/>
                                <option value="CRC"/>
                                <option value="CUC"/>
                                <option value="HRK"/>
                                <option value="CZK"/>
                                <option value="DKK"/>
                                <option value="FJD"/>
                                <option value="GMD"/>
                                <option value="GEL"/>
                                <option value="GTQ"/>
                                <option value="GNF"/>
                                <option value="GYD"/>
                                <option value="HTG"/>
                                <option value="HNL"/>
                                <option value="HUF"/>
                                <option value="ISK"/>
                                <option value="INR"/>
                                <option value="IDR"/>
                                <option value="IRR"/>
                                <option value="IQD"/>
                                <option value="JMD"/>
                                <option value="JPY"/>
                                <option value="JOD"/>
                                <option value="KZT"/>
                                <option value="KES"/>
                                <option value="KWD"/>
                                <option value="KGS"/>
                                <option value="LAK"/>
                                <option value="LBP"/>
                                <option value="LSL"/>
                                <option value="LRD"/>
                                <option value="LYD"/>
                                <option value="MOP"/>
                                <option value="MKD"/>
                                <option value="MGA"/>
                                <option value="MWK"/>
                                <option value="MYR"/>
                                <option value="MVR"/>
                                <option value="MRO"/>
                                <option value="MUR"/>
                                <option value="MXN"/>
                                <option value="MDL"/>
                                <option value="MNT"/>
                                <option value="MAD"/>
                                <option value="NOK"/>
                                <option value="OMR"/>
                                <option value="PKR"/>
                                <option value="PAB"/>
                                <option value="SDG"/>
                                <option value="SRD"/>
                                <option value="SZL"/>
                                <option value="SEK"/>
                                <option value="CHF"/>
                                <option value="SYP"/>
                                <option value="TWD"/>
                                <option value="TZS"/>
                                <option value="THB"/>
                                <option value="TOP"/>
                                <option value="TTD"/>
                                <option value="TND"/>
                                <option value="TRY"/>
                                <option value="TMM"/>
                                <option value="USD"/>
                                <option value="UGX"/>
                                <option value="UAH"/>
                                <option value="UYU"/>
                                <option value="AED"/>
                                <option value="VUV"/>
                                <option value="VEB"/>
                                <option value="VND"/>
                                <option value="YER"/>
                                <option value="ZMK"/>
                                <option value="ZWD"/>
                            </datalist>
                            </div>

                            <div id="fixedRatesDiv">
                                {Object.keys(this.state.data).map(key => <p className={'rateP'} style={this.state.isSpecial ? {backgroundColor: "red"} : {backgroundColor: "transparent"}}>{`${key}, ${this.state.data[key]}`}</p>)}
                            </div>
                        </Container>
                    </Col>
                </Row>

               
                <div id='currencyBG'></div>
            </div>

        );
    }
}

export default Currency;