import { WORK_TYPES_FETCHING, WORK_TYPES_FETCHING_DONE, WORK_TYPES_FETCHING_ERR } from '../actions';

const initStore = {
    works: [],
    list: [],
    types: [],
    typeOfWork: 'Все категории',
    workTitle: 'Любые работы'
}



export default function worksListReducer ( store = initStore, action ) {
    switch (action.type) {
        case WORK_TYPES_FETCHING:  return store;
        case WORK_TYPES_FETCHING_DONE:  return { ...store, ...action.payload };
        case 'TYPE_FILTER': return {...store, ...worksListFilter(action.payload.value, 'type_of_work', store.list)}
        case 'WORK_FILTER': return {...store, ...worksListFilter(action.payload.value, 'work_title', store.list)}
        case 'TYPES_SORT': return {...store, works: worksListSort(store.works, 'type_of_work')}
        case 'TYPES_SORT_REVERSE': return {...store,  works: worksListSort(store.works, 'type_of_work_reverse')}
        case 'TITLES_SORT': return {...store, works: worksListSort(store.works, 'work_title')}
        case 'TITLES_SORT_REVERSE': return {...store,  works: worksListSort(store.works, 'work_title_reverse')}
        case 'SERVICES_SORT': return {...store, works: worksListSort(store.works, 'services_counter')}
        case 'SERVICES_SORT_REVERSE': return {...store,  works: worksListSort(store.works, 'services_counter_reverse')}
        default: return store;
    }
}


function worksListFilter(value, type, array) {
    if (value === 'Все категории' || value === 'Любые работы') {
        return ({
            workTitle: 'Любые работы', 
            typeOfWork: 'Все категории',
            works: array
        })
    } else {
        return ({
            typeOfWork: type!=='type_of_work' ? 'Все категории' : value, 
            workTitle: type==='type_of_work' ? 'Любые работы' : value, 
            works: array.filter(el => el[type] == value)
        })
    }
}

function worksListSort(arrayOrig, type) {
    let array = [].concat(arrayOrig);
    switch (type) {
        case 'type_of_work': return array.sort(mainSort);
        case 'type_of_work_reverse': return array.sort(mainSortReverse);
        case 'work_title': return array.sort(workSort);
        case 'work_title_reverse': return array.sort(workSortReverse);
        case 'services_counter': return array.sort(servicesSort);
        default: return array.sort(servicesSortReverse);
    }
}

function mainSort(next, prev) {
    if (next.type_of_work > prev.type_of_work) { return 1 }
    else if (next.type_of_work < prev.type_of_work) { return -1 }
    else return 0;
}

function mainSortReverse(next, prev) {
    if (next.type_of_work > prev.type_of_work) { return -1 }
    else if (next.type_of_work < prev.type_of_work) { return 1 }
    else return 0;
}

function workSort(next, prev) {
    if (next.work_title > prev.work_title) { return 1 }
    else if (next.work_title < prev.work_title) { return -1 }
    else { return 0; }
}

function workSortReverse(next, prev) {
    if (next.work_title > prev.work_title) { return -1 }
    else if (next.work_title < prev.work_title) { return 1 }
    else return 0;
}

function servicesSort(next, prev) {
    if (+next.services_counter > +prev.services_counter) { return 1 }
    else if (+next.services_counter < +prev.services_counter) { return -1 }
    else return 0;
}

function servicesSortReverse(next, prev) {
    if (+next.services_counter > +prev.services_counter) { return -1 }
    else if (+next.services_counter < +prev.services_counter) { return 1 }
    else return 0;
}

