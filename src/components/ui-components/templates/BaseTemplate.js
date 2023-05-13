import PropTypes from 'prop-types';

import { NavBar } from '../common/Navbar';

/**
 * Base template
 * @returns 
 */
const BaseTemplate = ({ children = null }) => {
    return (
        <div className='w-full'>
            <NavBar/>
            <div className='container mx-auto mt-10 px-8 mb-8'>
                {children}
            </div>
            <div className='container mx-auto mt-8 p-4'>
                <p>© 2023 Cocktail Web Client</p>
            </div>
        </div>
    );
}

BaseTemplate.propTypes = {
    children: PropTypes.node,
}

export {
    BaseTemplate
}