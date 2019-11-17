import React, {useState, Component} from "react";
// import { Link } from "react-router-dom";
import axios from 'axios';
import "./currency.css";
import { Container} from 'reactstrap';



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
    
    class ExchangeCalculator extends Component{
    render(){
    return (
    <div>

      <Container id='resultsContainer'>

            <button  className="fetch-button" onClick={fetchData}>
                Fetch Data
            </button>

            <h3 className='resultsText'>
                Results
            </h3>

        <div className="results">
            {/* display api data */}

            {rates &&((rate, index) => {
                const calculatedRates = data.rates;
                
                return (
                    <div className="results" key={index}>
                    <h3>rates {index + 1}</h3>
                    <h2>{rate}</h2>

                    <div className="details">
                    <p>👨: {calculatedRates}</p>
                    {/* <p>📖: {book.numberOfPages} pages</p>
                    <p>🏘️: {book.country}</p>
                <p>⏰: {cleanedDate}</p> */}
                    </div>
                </div>
                );
            })}
        </div>
    </Container>
    </div>    
    )
  }
}

      export default ExchangeCalculator;