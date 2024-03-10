import React, { useRef } from 'react';
import './index.css';

const Index = ({setFilter}) => {

    const debounceRef =  useRef();    

    const handlerOnChange = (evt) => {


        if (debounceRef.current)
           clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(()=>{
            const { value } = evt.target;

            setFilter( f => {
                
                return {
                    ...f,
                    title: value
                }

            });
            
        },[ 1000 ]);        

    }

    const handlerOnChangeOption = (evt) => {
        const { value } = evt.target;
        const isFulltime = value === 'true';
        
        setFilter( f => {
             
            return {
                ...f,
                fulltime: value === '' 
                    ? null 
                    : isFulltime
            }

        });
    }

    return (
        <div className='filter'>
            <input 
                type='text' 
                placeholder='Search...' 
                className='filter-input'
                onChange={handlerOnChange}
            />

            <div>
                <div>
                    <label htmlFor='radio-all' >All</label>
                    <input 
                        id='radio-all'
                        type='radio'
                        name='fulltime'
                        onChange={handlerOnChangeOption}
                        value={undefined}                
                        defaultChecked
                    />
                </div>    
                <div>
                    <label htmlFor='radio-is-fulltime' >Fulltime</label>
                    <input 
                        id='radio-is-fulltime'
                        type='radio'
                        name='fulltime'
                        onChange={handlerOnChangeOption}
                        value={true}                
                    />
                </div>
                <div>
                    <label htmlFor='radio-no-fulltime' >No fulltime</label>
                    <input 
                        id='radio-no-fulltime'
                        type='radio'
                        name='fulltime'
                        onChange={handlerOnChangeOption}
                        value={false}                
                    />
                </div>
            </div>
        </div>
    )
}

export default Index