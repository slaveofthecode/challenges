import React, { useRef } from 'react';
import useDebounce from '../../hooks/useDebounce';
import './index.css';

const Index = ({setFilter}) => {

    const filterContainerRef = useRef(null);
    const { debounce } = useDebounce();

    const handlerOnChange = (evt) => {
        
        debounce( () => {
            const { value } = evt.target;
            console.log('debounce', value);

            filterContainerRef.current.classList.add('moveTop');

            setFilter( f => {                
                return {
                    ...f,
                    title: value
                }
            });

        }, 500);

    }

    const handlerOnChangeOption = (evt) => {
        const { value } = evt.target;
        const isFulltime = value === 'true';

        console.log('handlerOnChangeOption', value);
        filterContainerRef.current.classList.add('moveTop');
        
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
        <div className='filter-container' ref={filterContainerRef}>

            <div>
                <input 
                    type='text' 
                    placeholder='Search by title...'                     
                    onChange={handlerOnChange}
                />

                <div className='radios'>

                    <input 
                        id="all" 
                        type="radio" 
                        name="radios"  
                        onChange={handlerOnChangeOption} 
                        value={undefined}                
                        />
                    <label htmlFor="all">All</label>
                    <input 
                        id="justFullTime" 
                        type="radio" name="radios"  
                        onChange={handlerOnChangeOption} 
                        value={true}                
                        />
                    <label htmlFor="justFullTime">Just full-Time</label>
                    <input 
                        id="noFullTime" 
                        type="radio" 
                        name="radios"  
                        onChange={handlerOnChangeOption} 
                        value={false}                
                    />
                    <label htmlFor="noFullTime">No full-time</label>                
                </div> 

            </div>

        </div>
    )
}

export default Index