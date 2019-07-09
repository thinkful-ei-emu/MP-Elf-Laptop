import React from 'react';
import Spec from './Spec.js';

function MainForm (props) {
 
  
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <Spec 
        features={props.features}
        selected={props.selected}
        updateFeature = {props.updateFeature}
        />
    </section>
  )

}

export default MainForm