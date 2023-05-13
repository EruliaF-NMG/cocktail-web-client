import PropTypes from 'prop-types';

import { inputBoxType, emptyFunction } from '../../../configs/defaultProps.config';

/**
 * Input Box component
 * @returns
 */
const InputBox=({
    type=inputBoxType.TEXT,
    id='',
    className='',
    name='',
    placeholder='',
    value='',
    onChange=emptyFunction,
    onClick=emptyFunction
})=>{
    return (
        <input 
            id={id} 
            value={value}
            name={name} 
            type={type} 
            className={`p-4 border border-gray-400 hover:border-blue-400 rounded-md ${className}`}
            placeholder={placeholder}
            onChange={(event)=>onChange(event.target.value,id,event)}
            onClick={(event)=>onClick(event)}
        />
    )
};

InputBox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
}

export {
    InputBox
};