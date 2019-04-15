export const FETCHING_WORK_TYPES = 'FETCHING_WORK_TYPES';

export const fetchWorkTypes = () => {
    return async dispatch => {
        dispatch({ type: FETCHING_WORK_TYPES });

    }
}