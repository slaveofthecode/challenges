import React from 'react';
import './index.css';

const Item = ({ item, setDataSelected }) => {

    const handleClick = () => {
        setDataSelected(item);
    };

  return (
    <div className='item' >
        <figure className='item-image'>
            <img src={item.logo} alt={item.title} />
            <figcaption className='item-image__figCaption'>{item.description}</figcaption>
        </figure>
        <div className='item-container__detail'>
          <h2 className='item-title'>{item.title}</h2>
          <p className='item-details'>{item.details}</p>        
          <button onClick={handleClick} className='item-button__seeMore' > see more </button>
        </div>
    </div>
  )
}

export default Item