import { createContext, useReducer } from 'react';

import { _get } from '../../../helpers/lodash.wrappers';
import { coreAction } from '../actions/coreContext.actions';
import { getRandomList } from '../../../helpers/common.helper';
import {
    initApiResponseKey,
    setApiResponseKey,
    setApiResponseErrorKey,
    setApiResponseLoadingStatusKey,
    setRandomListKey,
} from '../../../configs/actionKeys.config';

const initialState = {
    apiResponses: {},
};

const CoreContext = createContext({});

/**
 * core reducer 
 * @param {Object} state 
 * @param {Object} action 
 * @returns 
 */
const coreReducer = (state, action) => {
    switch (action.type) {
        case initApiResponseKey:
            return {
                ...state,
                apiResponses: {
                    ...state.apiResponses,
                    [action.stateKey]: {
                        result: null,
                        isError:false,
                        isLoading:true,
                        _updateStatus: true,
                    }
                }
            }
        case setApiResponseKey:
            return {
                ...state,
                apiResponses: {
                    ...state.apiResponses,
                    [action.stateKey]: {
                        ..._get(state,`apiResponses.${action.stateKey}`,{}),
                        ...action.payload,
                        _updateStatus: !_get(state,`apiResponses.${action.stateKey}._updateStatus`,false),
                    }
                }
            }
        case setApiResponseErrorKey:   
            return {
                ...state,
                apiResponses: {
                    ...state.apiResponses,
                    [action.stateKey]: {
                        ..._get(state,`apiResponses.${action.stateKey}`,{}),
                        ...action.payload,
                        _updateStatus: !_get(state,`apiResponses.${action.stateKey}._updateStatus`,false),
                    }
                }
            }  
        case setApiResponseLoadingStatusKey:            
            return {
                ...state,
                apiResponses: {
                    ...state.apiResponses,
                    [action.stateKey]: {
                        ..._get(state,`apiResponses.${action.stateKey}`,{}),
                        isLoading:action.payload,
                        _updateStatus: !_get(state,`apiResponses.${action.stateKey}._updateStatus`,false),
                    }
                }
            } 
        case setRandomListKey:   
            return {
                ...state,
                apiResponses: {
                    ...state.apiResponses,
                    "cocktailList": {
                        isLoading:false,
                        isError:false,
                        result:getRandomList(_get(state,`apiResponses.${action.stateKey}.result`,[])),
                        _updateStatus: !_get(state,`apiResponses.cocktailList._updateStatus`,false),
                    }
                }
            }
        default:
            return state;
    }
}

const CoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(coreReducer, initialState);
    const dispatchFunction = coreAction(dispatch);
    return (
        <CoreContext.Provider value={[state, dispatchFunction]}>
            {children}
        </CoreContext.Provider>
    )
}

export {
    CoreContext,
    CoreContextProvider,
}