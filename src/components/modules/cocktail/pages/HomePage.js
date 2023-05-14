import { useEffect,useContext } from 'react';

import { BaseTemplate } from '../../../ui-components/templates/BaseTemplate';
import { ItemSearchANDRefresh } from '../../../ui-components/custom-elements/ItemSearchANDRefresh';
import { CocktailItem } from '../../../ui-components/custom-elements/CocktailItem';
import { CoreContext } from '../../../global-context/context-providers/CoreContext.provider';
import { _get } from '../../../../helpers/lodash.wrappers';
import { getAllData,getSearchData } from '../../../../configs/apiEndPoints.config';
import { IterateData } from '../../../ui-components/common/IterateData';

const HomePage = () => {

    const [state, coreAction] = useContext(CoreContext);

    const isDataIsFetched=()=>{
       return  _get(state,`apiResponses.${getAllData.key}.result`) ? true : false;
    }

    useEffect(()=>{
        if(!isDataIsFetched()) {
           coreAction.requestRandomList(getAllData.url,getAllData.key);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <BaseTemplate>
            <ItemSearchANDRefresh
                onRefresh={()=>coreAction.requestRandomList(getAllData.url,getAllData.key,!isDataIsFetched())}
                onSearch={(searchText)=>coreAction.sendAPIRequest(`${getSearchData.url}${searchText}`,getSearchData.key)}
            />
            <IterateData
                className='home-page-wrapper'
                array={_get(state,`apiResponses.cocktailList.result`,[])}
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
  
  export default HomePage;