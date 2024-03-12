import React from 'react';
import './index.css';

const Item = ({ item, setDataSelected }) => {

    const handleClick = () => {
        setDataSelected(item);
    };

  return (
    <div className='item' >      
       <div>
        <figure>
          <h3>{item.title}</h3>
          <img src={item.logo} alt={item.title} />
          <figcaption>{item.description}</figcaption>
          <button onClick={handleClick}> see more </button> 
        </figure>
       </div>
    </div>
  )
}

export default Item