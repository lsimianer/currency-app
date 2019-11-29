
            import React, {Component, useState} from "react";
            // import { Link } from "react-router-dom";
            import axios from 'axios';
            import "./currency.css";
            import { Container, Row, Col } from 'reactstrap';
            // import ExchangeCalculator from './currencyhelper.js';
            
            
            const [rates, setRates] = useState(null);
            
            var baseParam = 'USD';
            //    document.getElementById('baseCurrencyChoice').value;
            var compParam1 ='AUD';
            var compParam2 ='GBP';
            
            const fetchData = async () => {
                const response = await axios.get(
                    `https://api.exchangeratesapi.io/latest?base=${baseParam}&symbols=${compParam1},${compParam2}`
                    //    `https://api.exchangeratesapi.io/latest?base=USD&symbols=JPY,GBP`
                    
                    );
                    
                    setRates(response.data);
                };
            
            
            
                class Currency extends Component {

            
            
            
                render() {
                    return (
            
             <Container id='landingContainer'>
                <h1 className="titleText">
                    Currency Exchange Calculator
                </h1>
                <h4 className='bodyText'>
                Select your base Currency, select one or two comparison currencies, and click calculate!
                </h4>
                <br/>
                </Container>
                <Container id='currencyContainer'>
                <Row>
                    <Col>        
                        <h3 className="label">
                            Base Currency
                        </h3>
                        <label >Currency:</label>
                            <input list="base-currency" id="baseCurrencyChoice" name="base-currency-choice" />
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
                    </Col>
                    <Col>
                        <h3 className="label">
                            Comparison Currency 1
                        </h3>
                        <label>Currency:</label>
                            <input list="first-currency" id="first-currency-choice" name="first-currency-choice" />
                            <datalist id="first-currency">
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
                            </Col>
                            <Col>
                        <h3 className="label">
                            Comparison Currency 2
                        </h3>
                        <label>Currency 2:</label>
                            <input list="second-currency" id="second-currency-choice" name="second-currency-choice" />
                            <datalist id="second-currency">
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
                    </Col>
                </Row>
            </Container>
            {/* component area only----------------------------------------------------------------------------------------------------- */}
             <Container id='resultsContainer'>

                    <button  className="fetch-button" onClick={fetchData}>
                        Fetch Data
                    </button>

                    <h3 className='resultsText'>
                        Results
                    </h3>

                    <div className="results"> */}
                    {/* display api data */}

                     {rates &&((rate, data, index) => {
                        const calculatedRates = data.rates;
                        
                        return (
                            <div className="results" key={index}>
                            <h3>rates {index + 1}</h3>
                            <h2>{rate}</h2>

                            <div className="details">
                            <p>👨: {calculatedRates}</p>
                          
                            </div>
                        </div>
                        );
                    })}
                    </div>
                    </Container> 


            {/* component area only----------------------------------------------------------------------------------------------------- */}

            
            );
        }
 }
 

export default Currency;