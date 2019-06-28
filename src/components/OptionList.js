import React from 'react';
import SelectOption from './SelectOption.js';

function OptionList (props) {
  console.log(props);
  
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      <SelectOption features={props.features}/>
    </section>
  )

}

export default OptionList 