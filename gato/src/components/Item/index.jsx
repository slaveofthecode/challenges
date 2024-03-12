import React from 'react';
import './index.css';

const Item = ({ item, setDataSelected }) => {

    const handleClick = () => {
        setDataSelected(item);
    };

  // return (
  //   <div className='item' >
       
  //       <figure>
  //         <img src={item.logo} alt={item.title} />
  //         <figcaption>{item.description}</figcaption>
  //       </figure>
       
  //       <section>
  //         <h3>{item.title}</h3>
  //         <p>{item.details}</p>        
  //         <button onClick={handleClick}> see more </button> 
  //       </section> 

  //   </div>
  // )

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

       
        {/* <section>
          <p>{item.details}</p>        
        </section>  */}

    </div>
  )
}

export default Item