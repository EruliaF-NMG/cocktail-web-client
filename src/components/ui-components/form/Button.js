import PropTypes from 'prop-types';

import { emptyFunction } from '../../../configs/defaultProps.config';

const Button=({
    id='',
    className='',
    children=null,
    onClick=emptyFunction,
})=>{
    return (
        <button 
            id={id}
            className={className} 
            type={'button'} 
            onClick={(event)=>onClick(event)}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    id: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children:PropTypes.node
}

export {
    Button
}