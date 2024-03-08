import React from 'react';
import './index.css';

const Modal = ({dataSelected, setDataSelected}) => {
    console.log('MODAL', dataSelected);
    if (!dataSelected) return null;
  return (
    <section className='modal -show'>
        <div className='modal-content'>
          <div>Modal</div>
          <pre>
              {JSON.stringify(dataSelected, null, 2)}
          </pre>
          <span className='modal-button__close' onClick={()=>setDataSelected(null)} >x</span>
        </div>
    </section>
  )
}

export default Modal