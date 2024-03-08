import React from 'react';
import Item from '../Item';

import './index.css';

const Grid = ({ data, setDataSelected }) => {
  return (
    <section className='grid'>
        {data.map((item, index) => (
            <Item 
                key={index} 
                item={item} 
                setDataSelected={setDataSelected} 
            />            
        ))}
    </section>
  )
}

export default Grid