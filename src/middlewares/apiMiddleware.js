const apiMiddleWare = store => next => action => {
    if (action.type == 'API_GET_WORKS') {
        fetch('https://api1.remontista.ru/tools/all_work_type')
        .then(res=>res.json())
        .then(res=>{
            if(res.result) {
                let works = res.work_types;
                let worksAsArray = Object.keys(works).reduce((res, el) => [...res, { [el]: works[el] }], []);
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
                next({...action, payload: {
                                            works: resultedArray,
                                            list: resultedArray,
                                            types: types.filter((el, i) => !types.includes(el, i + 1))
                                         }
                });
            }
        })
        .catch(err=>console.log(err));
    } 
    next(action);
}

export default apiMiddleWare;