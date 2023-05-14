import { randomListLimit } from '../configs/defaultProps.config';

/**
 * generate unique random list
 * @param {Array} result 
 * @param {Number} count 
 * @returns {Array}
 */
const getRandomList=([...result],count = randomListLimit)=>{
    let list=[];
    if(result.length===0) return [];
    while(list.length < randomListLimit){
        const index = Math.floor(Math.random()*result.length);
        if(!list.find((item)=>item.idDrink===result[index]['idDrink'])) list.push(result[index]);
    }
    return list;
}

/**
 * Check value is empty
 * @param {Any} value 
 * @returns {boolean}
 */
const isEmpty = (value) => {
    if(value === null || value === undefined ) return true;
    return false;
}

/**
 * remove element form array
 * @param {Array} array 
 * @param {Any} value 
 * @returns {Array}
 */
const removeItemFromArray = ([...array],value) => {
    const index = array.indexOf(value);
    if (index !== -1) array.splice(index, 1);
    return array;
}

export {
    getRandomList,
    isEmpty,
    removeItemFromArray
}