import React from 'react';
import Item from '../Item';

import './index.css';

const Grid = ({ data, setDataSelected }) => {
  return (
    <div style={{ padding: '30px 10px', position: 'relative' }} >
      <small className='grid-totalrows' > 
        Total rows 
        ( 
          <strong className='grid-totalrows__value'>
              { data?.length }
          </strong> 
        )
        </small>
      <section className='grid'>          

          {data?.map((item, index) => (
            <Item 
            key={index} 
            item={item} 
            setDataSelected={setDataSelected} 
            />            
            ))}
      </section>
    </div>
  )
}

export default Grid