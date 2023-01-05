import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CurrencyChange = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const [curCurrency, setCurrency] = useState(currency);
  const submitEvent = (newCurrency) => {

    setCurrency(newCurrency);

    dispatch({
      type: 'CHG_CURRENCY',
      payload: newCurrency,
    });
  };
  return (
    <div className={`alert alert-success`}>
      <span style={{color:"white",}}>Currency </span>
        <select style={{border:"0px",color:"white",backgroundColor:"#d1e7dd"}}className="custom-select" id="currency-select" onChange={(event) => submitEvent(event.target.value)}>
            <option style={{backgoundColor:"#d1e7dd",color:"black"}}value="$ Dollar" name="Dollar">$ Dollar</option>
            <option style={{backgoundColor:"#d1e7dd",color:"black"}} value="£ Pound" name="Pound" selected>£ Pound</option>
            <option style={{backgoundColor:"#d1e7dd",color:"black"}} value="€ Euro" name="Euro">€ Euro</option>
            <option style={{backgoundColor:"#d1e7dd",color:"black"}} value="₹ Ruppee" name="Ruppee">₹ Ruppee</option>
        </select>
        </div>

    // <div class="dropdown">
    //   <button class="btn btn-secondary btn-lg dropdown-toggle" 
    //     value={"Currency (" + curCurrency + ")"}
    //    type="button" 
    //    id="dropdownMenu2" 
    //    aria-haspopup="true" 
    //    aria-expanded="false">
    //   </button>
    //   <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    //     <button class="dropdown-item" type="button" onClick={() => submitEvent("$ Dollar")}>$ Dollar</button>
    //     <button class="dropdown-item" type="button" onClick={() => submitEvent("£ Pound")}>£ Pound</button>
    //     <button class="dropdown-item" type="button" onClick={() => submitEvent("€ Euro")}>€ Euro</button>
    //   </div>
    // </div>
  );
};

export default CurrencyChange;