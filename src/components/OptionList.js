import React from 'react';
import PriceList from './PriceList';

function OptionList (props) {

  const features = Object.keys(props.features)
  .map(key => {
    const options = props.features[key].map((item, index) => {
      const selectedClass = item.name === props.selected[key].name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
      
      return <li key={index} className="feature__item">
        <div className={featureClass} onClick={e => props.updateFeature(key, item)}>
            { item.name }
            
            {/* cost in US currency*/}
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(item.cost) })
        </div>
      </li>
    });

    return <div className="feature" key={key}>
      <div className="feature__name">{key}</div>
      <ul className="feature__list">
        { options }
      </ul>
    </div>
  });  
  
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      <ul>
        {features}
      </ul>
      <PriceList
      selected={props.selected}
      />
    </section>
  )

}

export default OptionList 