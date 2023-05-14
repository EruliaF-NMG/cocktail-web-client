import { useContext } from 'react';

import { BaseTemplate } from '../../../ui-components/templates/BaseTemplate';
import { IterateData } from '../../../ui-components/common/IterateData';
import { CocktailItem } from '../../../ui-components/custom-elements/CocktailItem';
import { _get } from '../../../../helpers/lodash.wrappers';
import { CoreContext } from '../../../global-context/context-providers/CoreContext.provider';
import { getAllData } from '../../../../configs/apiEndPoints.config';

const WishListPage = () => {
    const [state, coreAction] = useContext(CoreContext);

    const getWishList=()=>{
      return _get(state,`apiResponses.${getAllData.key}.result`,[]).filter((item)=>state.wishList.includes(item.idDrink))
    }

    return (
        <BaseTemplate>
           <IterateData
                className='home-page-wrapper'
                array={getWishList()}
                callBackElement={(cocktail,index)=>{
                    return (
                        <CocktailItem
                            itemId={cocktail.idDrink}
                            name={cocktail.strDrink}
                            category={cocktail.strCategory}
                            image={cocktail.strDrinkThumb}
                            key={index}
                            currentWishList={state.wishList}
                            onAddWishList={(id)=>{coreAction.addToWishList(id)}}
                            onRemoveWishList={(id)=>{coreAction.removeFromWishList(id)}}
                        />
                    )
                }}
            />
        </BaseTemplate>
    );
};
  
export default WishListPage;