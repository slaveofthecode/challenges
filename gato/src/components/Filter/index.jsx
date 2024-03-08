import React, { useState } from 'react';
import './index.css';

const Filter = () => {

    const [ filter, setFilter] = useState({
        rol: null,
        isFulltime: false,
        name: null
    });

    const handleChangeFilter = (e) => {
      // console.log(e.target.type)
      // console.log(e.target.checked);
      // console.log(e.target.value);

      if (e.target.type === 'checkbox') {
          setFilter({
              ...filter,
              isFulltime: e.target.checked
          })
      } else {
          setFilter({
              ...filter,
              name: e.target.value
          })  
      }
      
    }

  return (
    <section className='filter'>
        <div className='filter-label'>Filter</div>
        <div>
            <input type="text" placeholder="Search by Title" className='filter-input' onChange={handleChangeFilter} />
            <input type='checkbox' name='fulltime' value='Frontend' className='filter-checkbox' onClick={handleChangeFilter}  /> FullTime
        </div>
    </section>
  )
}

export default Filter