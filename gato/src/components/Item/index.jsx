import React from 'react';
import './index.css';

const Item = ({ item, setDataSelected }) => {

    const handleClick = () => {
        setDataSelected(item);
    };

  return (
    <div className='item' >
       
        <figure>
          <img src={item.logo} alt={item.title} />
          <figcaption>{item.description}</figcaption>
        </figure>
       
        <section>
          <h3>{item.title}</h3>
          <p>{item.details}</p>        
          <button onClick={handleClick}> see more </button> 
        </section> 

    </div>
  )
}

export default Item