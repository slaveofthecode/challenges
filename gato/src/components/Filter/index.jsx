import React, { useRef } from 'react';
import useDebounce from '../../hooks/useDebounce';
import InputRadio from '../common/InputRadio';
import './index.css';

const Filter = ({setFilter}) => {

    const filterContainerRef = useRef(null);
    const { debounce } = useDebounce();

    const handlerOnChange = (evt) => {
        
        debounce( () => {
            const { value } = evt.target;

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
                    <InputRadio 
                        id='all'
                        name='radios'
                        value={undefined}
                        text='All'
                        handlerOnChangeOption={handlerOnChangeOption}
                    />
                    <InputRadio
                        id='justFullTime'
                        name='radios'
                        value={true}
                        text='Just full-Time'
                        handlerOnChangeOption={handlerOnChangeOption}
                    />
                    <InputRadio
                        id='noFullTime'
                        name='radios'
                        value={false}
                        text='No full-time'
                        handlerOnChangeOption={handlerOnChangeOption}
                    />
                </div> 

            </div>

        </div>
    )
}

export default Filter