import {
  initApiResponseKey,
  setApiResponseKey,
  setApiResponseErrorKey,
  setApiResponseLoadingStatusKey,
  setRandomListKey,
  addToWishListKey,
  removeFromWishListKey
} from '../../../configs/actionKeys.config';
import { getData } from '../../../helpers/axios.wrapper';

/**
 * initialize response object 
 * @param {Function} dispatch 
 * @param {String} stateKey 
 */
const initApiResponse = (dispatch, stateKey) => {
  dispatch({
    type: initApiResponseKey,
    stateKey: stateKey,
  });
};

/**
 * set api response to global state
 * @param {Function} dispatch 
 * @param {String} stateKey 
 * @param {Object} result 
 */
const setApiResponse = (dispatch, stateKey, result) => {
  dispatch({
    type: setApiResponseKey,
    stateKey: stateKey,
    payload: result,
  });
};

/**
 * set error response to global state
 * @param {Function} dispatch 
 * @param {String} stateKey 
 * @param {Object} result 
 */
const setErrorObject = (dispatch, stateKey, result) => {
  dispatch({
    type: setApiResponseErrorKey,
    stateKey: stateKey,
    payload: result,
  });
};

/**
 * set page loading state
 * @param {Function} dispatch 
 * @param {String} stateKey 
 * @param {Boolean} result 
 */
const setResponseLoadingStatus = (dispatch, stateKey, result) => {
  dispatch({
    type: setApiResponseLoadingStatusKey,
    stateKey: stateKey,
    payload: result,
  });
};

/**
 * request api data and update global state
 * @param {Function} dispatch 
 * @param {String} apiUrl 
 * @param {String} apiKey 
 */
const sendAPIRequest = async (dispatch, apiUrl = null,apiKey=null) => {
  initApiResponse(dispatch,apiKey);
  // call api
  
  const result = await getData(apiUrl);
  //stop page loading
  setResponseLoadingStatus(dispatch,apiKey,false);

  if(result._status) {
      //set success result
      setApiResponse(dispatch,apiKey,{
          result:result.data || []
      });
  } else {
      //set error result
      setErrorObject(dispatch,apiKey,{
          isError:true,
          result:[]
      });
  }
};


/**
 * request random data list
 * @param {Function} dispatch 
 * @param {String} apiUrl 
 * @param {String} apiKey
 * @param {Boolean} isFirstRequest
 */
const requestRandomList = async (dispatch, apiUrl = null,apiKey=null,isFirstRequest=true) => {
  if(isFirstRequest) await sendAPIRequest(dispatch,apiUrl,apiKey);
  dispatch({
    type: setRandomListKey,
    stateKey: apiKey,
  });
}

/**
 * add item for wish list
 * @param {Function} dispatch 
 * @param {String} itemId 
 */
const addToWishList = (dispatch,itemId) => {
  dispatch({
    type: addToWishListKey,
    payload: itemId,
  });
};

/**
 * remove item from wish list
 * @param {Function} dispatch 
 * @param {String} itemId 
 */
const removeFromWishList = (dispatch,itemId) => {
  dispatch({
    type: removeFromWishListKey,
    payload: itemId,
  });
};

/**
 * single entry point to access all action methods
 * @param {Function} dispatch 
 */
const coreAction = (dispatch) => {
  return {
    sendAPIRequest: (apiUrl,apiKey) => sendAPIRequest(dispatch, apiUrl,apiKey),
    setErrorObject: (apiKey, result) => setErrorObject(dispatch, apiKey, result),
    setResponseLoadingStatus: (apiKey, result) => setResponseLoadingStatus(dispatch, apiKey, result),
    requestRandomList: (apiUrl,apiKey,isFirstRequest) => requestRandomList(dispatch, apiUrl,apiKey,isFirstRequest),
    addToWishList: (itemId) => addToWishList(dispatch,itemId),
    removeFromWishList: (itemId) => removeFromWishList(dispatch,itemId),
  };
};

export { coreAction };