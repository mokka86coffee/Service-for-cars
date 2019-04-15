export const WORK_TYPES_FETCHING = 'FETCHING_WORK_TYPES';
export const WORK_TYPES_FETCHING_DONE = 'WORK_TYPES_FETCHING_DONE';
export const WORK_TYPES_FETCHING_ERR = 'WORK_TYPES_FETCHING_ERR';

export function fetchWorkTypes() {
    return async dispatch => {
        dispatch({ type: WORK_TYPES_FETCHING });
        try {
            const fetchedData = crossBrowserFetch('https://api1.remontista.ru/tools/all_work_type')

        } catch (err) {
            dispatch({ type: WORK_TYPES_FETCHING });
        }
    }
}

const apiMiddleWare = store => next => action => {
    if (action.type == 'API_GET_WORKS') {
        
        .then(res=>{
            if(res.result=='success') {
                const resultedArray = exportFromFetch(res.work_types);
                store.dispatch({type: 'API_GOT_WORKS', payload: {
                                            works: resultedArray,
                                            list: resultedArray,
                                            types: Object.keys(res.work_types)
                                         }
                                })
            } else {
                throw new Error('Got error from fetch');
            }
        })        
        .catch(err=>console.log(err));
    } 
    next(action);
}

function exportFromFetch(fetchedArray) {
    let worksAsArray = Object.keys(fetchedArray).reduce((res, el) => [...res, { [el]: fetchedArray[el] }], []);
    let id = 0;
    let resultedArray = [];
    let types = [];
    worksAsArray.forEach(el => {
        for (let i in el) {
            types.push(i);
            for (let j in el[i]) {
                resultedArray.push({
                    id: id++,
                    type_of_work: i,
                    work_title: j,
                    services_counter: el[i][j]
                });
            }
        }
    });
    return resultedArray;
}

export default apiMiddleWare;