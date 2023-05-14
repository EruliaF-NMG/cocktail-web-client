import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Button } from '../form/Button';
import { emptyFunction } from '../../../configs/defaultProps.config';

const CocktailItem = ({
    image='',
    name='',
    category='',
    itemId='',
    showAddBtn=true,
    showRemoveBtn=true,
    currentWishList=[],
    onAddWishList=emptyFunction,
    onRemoveWishList=emptyFunction
}) =>{

    const isShowAddToWishList = () => {
        if( showAddBtn === true && currentWishList.indexOf(itemId) === -1 ) return true;
        return false;
    }

    const isShowRemoveFromWishList = () => {
        if( showRemoveBtn === true && currentWishList.indexOf(itemId) !== -1 ) return true;
        return false;
    }

    return (
        <div className={'w-full shadow-xl'} data-testid={`cocktail_item_${itemId}`}>
            <NavLink to={`/cocktail/${itemId}`}>
                <img alt='name' className='w-full' src={image} />
            </NavLink>
            <div className='cocktail-item-detail-wrapper'>
                <div><p className='text-xs text-white'>{name}({category})</p></div>
                {
                    (isShowAddToWishList()) ? <Button className='cocktail-item-wish-list-btn bg-blue-500' onClick={()=>onAddWishList(itemId)}>Add To WishList</Button> : null
                }
                {
                    (isShowRemoveFromWishList()) ? <Button className='cocktail-item-wish-list-btn bg-red-500' onClick={()=>onRemoveWishList(itemId)}>Remove</Button> : null
                }
            </div>
        </div>
    );
}

CocktailItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    itemId: PropTypes.string,
    showAddBtn: PropTypes.bool,
    showRemoveBtn: PropTypes.bool,
    currentWishList: PropTypes.array,
    onAddWishList: PropTypes.func,
    onRemoveWishList: PropTypes.func,
}

export {
    CocktailItem
}