import { useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';

import { BaseTemplate } from '../../../ui-components/templates/BaseTemplate';
import { CoreContext } from '../../../global-context/context-providers/CoreContext.provider';
import { _get } from '../../../../helpers/lodash.wrappers';
import { getItemByID } from '../../../../configs/apiEndPoints.config';
import { Spinner } from '../../../ui-components/common/SpinnerElement';

const ViewCocktailPage = () => {

    const { id } = useParams();
    const [state, coreAction] = useContext(CoreContext);
    const stateKey = `apiResponses.${getItemByID.key}${id}.result`;

    useEffect(()=>{
        if(!_get(state,stateKey)) {
           coreAction.sendAPIRequest(`${getItemByID.url}${id}`,`${getItemByID.key}${id}`);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <BaseTemplate>
            {
                (_get(state,stateKey)) ? (
                    <div className='w-full'>
                        <h1 className='mb-8 text-lg'>{_get(state,`${stateKey}.0.strDrink`)}</h1>
                        <div className='flex'>
                            <div className='flex-1'>
                                <img className='w-full' src={_get(state,`${stateKey}.0.strDrinkThumb`)} alt='logo'/>
                            </div>
                            <div className='flex-1 p-5'>
                                <b>Name:</b> {_get(state,`${stateKey}.0.strDrink`)} <br/>
                                <b>Category:</b> {_get(state,`${stateKey}.0.strCategory`)} <br/>
                                <b>Instructions:</b> {_get(state,`${stateKey}.0.strInstructions`)} <br/>
                                <b>Ingredient:</b> {_get(state,`${stateKey}.0.strIngredient1`)},{_get(state,`${stateKey}.0.strIngredient2`)},{_get(state,`${stateKey}.0.strIngredient3`)},{_get(state,`${stateKey}.0.strIngredient3`)} <br/>
                            </div>
                        </div>
                    </div>
                ): (
                    <div className='w-full flex justify-center mt-8'>
                        <Spinner/>
                    </div>
                )
            }
        </BaseTemplate>
    )
}

export default ViewCocktailPage;