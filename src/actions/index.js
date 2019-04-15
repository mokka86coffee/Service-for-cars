export const WORK_TYPES_FETCHING = 'FETCHING_WORK_TYPES';
export const WORK_TYPES_FETCHING_DONE = 'WORK_TYPES_FETCHING_DONE';
export const WORK_TYPES_FETCHING_ERR = 'WORK_TYPES_FETCHING_ERR';

export function fetchWorkTypes() {
    return async dispatch => {
        dispatch({ type: WORK_TYPES_FETCHING });
    }
}