import React from 'react';
import Total from './Total.js';
import Option from './Option.js';

function PriceList (props) {
  return (
  <section className="main__summary">
    <h3>NEW GREENLEAF 2018</h3>
    <Option 
    selected = {props.selected}
    />
    <Total 
    selected = {props.selected}
    />
  </section>
  )
}

export default PriceList