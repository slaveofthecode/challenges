import React from 'react';
import Item from '../Item';

import './index.css';

const Grid = ({ data, setDataSelected }) => {
  return (
    <div style={{ padding: '5px 10px', position: 'relative' }} >

      {
        data?.length > 0 && (
          <div  className='grid-totalrows'>
            <small >             
              Total rows 
              ( 
                <strong>
                    { data?.length }
                </strong> 
              )
            </small>
          </div>
        )
      }
      
      <section className='grid-container'>          

          {
            data?.map((item, index) => (
              <Item 
                key={index} 
                item={item} 
                setDataSelected={setDataSelected} 
              />            
            ))
          }

      </section>
    </div>
  )
}

export default Grid