import * as actionTypes from './actionTypes';

export const saveResult = ( result ) => {
    const updateResult = result*2;
    return {
        type: actionTypes.STORE_RESULT,
        result: updateResult
    }
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().counter.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: id
    }
};
