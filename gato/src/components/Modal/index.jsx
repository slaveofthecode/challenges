import React from 'react';

import './index.css';

const Modal = ({dataSelected, setDataSelected}) => {
    if (!dataSelected) return null;

    const formatDate = (date) => {
      const d = new Date(date);
      return d.toLocaleDateString();
    }

  return (
    <section className='modal -show'>
        <div className='modal-content'>
          <span className='modal-button__close' onClick={()=>setDataSelected(null)} >x</span>
          <header>
            <div>
              <h3>{dataSelected.title}</h3>
              <h5>
                {dataSelected.description}
              </h5>
              <small className='fulltime'>
                { `${dataSelected.fulltime ? 'full-time' : 'no full-time'} `}
              </small>
            </div>
            <div>
              <img src={dataSelected.logo} alt={dataSelected.company} />
            </div>
          </header>
          <hr />
          <section>
              <p>
                <label>Company: </label>
                <span>{dataSelected.company}</span>
              </p>
              <p>
                <label>City: </label>
                <span>{dataSelected.city}</span>
              </p>
              <p>
                <label>Location: </label>
                <span>{dataSelected.location}</span>
              </p>
              
              <div className='description'>
                <small>{dataSelected.details}</small>
              </div>              
          </section>
          <footer>
                <div>
                  <strong>| <span>{dataSelected.id}</span> |</strong>
                  
                </div>
                <span>{formatDate(dataSelected.created)}</span>
          </footer>
        </div>
    </section>
  )
}

export default Modal;