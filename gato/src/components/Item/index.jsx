import React from 'react';
import './index.css';

const Item = ({ item, setDataSelected }) => {

    const handleClick = () => {
        setDataSelected(item);
    };

  return (
    <div className='item1' >
       
        <figure>
          <img src={item.logo} alt={item.title} />
          <figcaption>{item.description}</figcaption>
        </figure>
       
        <section>
          <h3 className='item-title1'>{item.title}</h3>
          <p className='item-details1'>{item.details}</p>        
          <button onClick={handleClick} className='item-button__seeMore' > see more </button> 
        </section> 

    </div>
  )
}

export default Item