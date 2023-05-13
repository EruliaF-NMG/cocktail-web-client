import { useEffect,useContext } from 'react';

import { BaseTemplate } from '../../../ui-components/templates/BaseTemplate';
import { CoreContext } from '../../../global-context/context-providers/CoreContext.provider';
import { getAllData } from '../../../../configs/apiEndPoints.config';
import { _get } from '../../../../helpers/lodash.wrappers';

const HomePage = () => {

    const [state, coreAction] = useContext(CoreContext);

    const isDataIsFetched=()=>{
        return  _get(state,`apiResponses.${getAllData.key}.result`) ? true : false;
     }

    useEffect(()=>{
        if(!isDataIsFetched()) {
           coreAction.sendAPIRequest(getAllData.url,getAllData.key);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <BaseTemplate>
            home
        </BaseTemplate>
    );
  };
  
  export default HomePage;