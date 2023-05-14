import PropTypes from 'prop-types';

import { InputBox } from '../form/InputBox';
import { Button } from '../form/Button';
import { emptyFunction } from '../../../configs/defaultProps.config';
import { useState } from 'react';

const ItemSearchANDRefresh = ({
    onRefresh=emptyFunction,
    onSearch=emptyFunction,
}) =>{
    const [searchText,setSearchText] = useState('');

    const onRefreshList=()=>{
        setSearchText("");
        onRefresh();
    }

    return(
        <div className='md:flex md:justify-center'>
            <InputBox 
                value={searchText} 
                id='search-text' 
                className='md:w-5/12 w-full' 
                name='search-text' 
                placeholder='Search hera' 
                onChange={(value)=>setSearchText(value)}
            />
            <div className='search-and-refresh-btn-wrapper'>
                <Button className='search-btn-style' onClick={()=>onSearch(searchText)}>Search</Button>
                <Button className='refresh-btn-style' onClick={()=>onRefreshList()}>Refresh</Button>
            </div>
        </div>
    );
}

ItemSearchANDRefresh.propTypes = {
    onRefresh: PropTypes.func,
    onSearch: PropTypes.func,
}

export {
    ItemSearchANDRefresh
}