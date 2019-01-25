import React from 'react';
import {connect} from 'react-redux';

class Carservice extends React.Component {

    constructor(props) {
        super(props);
        this.selectNode = React.createRef();
    }

    componentDidMount(){
        this.props.dispatch({type: 'API_GET_WORKS'});
    }

    typeSort = () => this.props.dispatch({type: 'TYPES_SORT'});
    typeSortReverse = () => this.props.dispatch({type: 'TYPES_SORT_REVERSE'});
    titleSort = () => this.props.dispatch({type: 'TITLES_SORT'});
    titleSortReverse = () => this.props.dispatch({type: 'TITLES_SORT_REVERSE'});
    servicesSort = () => this.props.dispatch({type: 'SERVICES_SORT'});
    servicesSortReverse = () => this.props.dispatch({type: 'SERVICES_SORT_REVERSE'});

    typeFilter = (e) => {
        e.target.classList.remove('active');
        e.target.blur();
        this.props.dispatch({type: 'TYPE_FILTER', payload: {value: e.target.options[e.target.selectedIndex].text}});
    }
    workFilter = (e) => {
        e.target.classList.remove('active');
        e.target.blur();
        this.props.dispatch({type: 'WORK_FILTER', payload: {value: e.target.options[e.target.selectedIndex].text}});
    }

    render() {
    const { works, list, types, typeOfWork, workTitle } = this.props.worksList;
    return (
    <section className="autoservices">
    <h2 className="autoservices__title">Количество автосервисов по видам работ</h2>
    <table className="autoservices__list">
        <thead className="autoservices__filter-titles-container">
            <tr className="autoservices__filter-titles">
                <td className="autoservices__box-title autoservices__box-title--first">
                    <div className="autoservices__filtersm">
                        <span>Категория работ</span>
                        <div className="autoservices__filtersm-btns">
                            <button onClick={this.typeSort} className="autoservices__filtersm-btn autoservices__filtersm-btn--up"></button>
                            <button onClick={this.typeSortReverse} className="autoservices__filtersm-btn autoservices__filtersm-btn--down"></button>
                        </div>
                    </div>
                </td>
                <td className="autoservices__box-title autoservices__box-title--second">
                    <div className="autoservices__filtersm">
                        <span>Вид работы</span>
                        <div className="autoservices__filtersm-btns">
                            <button onClick={this.titleSort} className="autoservices__filtersm-btn autoservices__filtersm-btn--up"></button>
                            <button onClick={this.titleSortReverse} className="autoservices__filtersm-btn autoservices__filtersm-btn--down"></button>
                        </div>
                    </div>
                </td>
                <td className="autoservices__box-title autoservices__box-title--third">
                </td>
            </tr>
            <tr className="autoservices__filter-options">
                <td>
                    <select 
                        onFocus={e=>e.target.classList.add('active')} 
                        onBlur={e=>e.target.classList.remove('active')} 
                        onChange={this.typeFilter} 
                        value={typeOfWork} 
                        name="type_of_work" id="type_of_work"
                        className="autoservices__select"
                    >
                        <option value="Все категории">Все категории</option>
                        {
                            types.length && types.map((el, i) => 
                            <option key={i} value={el}>{el}</option>)
                        }
                    </select>
                </td>
                <td>
                    <select 
                        onChange={this.workFilter} 
                        onBlur={e=>e.target.classList.remove('active')} 
                        onFocus={e=>e.target.classList.add('active')} 
                        value={workTitle} 
                        name="work_title" id="work_title"
                        className="autoservices__select"
                    >
                        <option value="Любые работы">Любые работы</option>
                        {
                            list.length && list.map((el, i) => 
                            <option key={i} value={el.work_title}>{el.work_title}</option>)
                        }
                    </select>
                </td>
                <td>
                    <div className="autoservices__filtersm">
                        <span>Кол-во</span>
                        <div className="autoservices__filtersm-btns">
                            <button onClick={this.servicesSort} className="autoservices__filtersm-btn autoservices__filtersm-btn--up"></button>
                            <button onClick={this.servicesSortReverse} className="autoservices__filtersm-btn autoservices__filtersm-btn--down"></button>
                        </div>
                    </div>
                </td>
            </tr>
        </thead>
        <tbody className="autoservices__items-container">
            {
                works.length && works.map(el=>(
                    <tr className="autoservices__items-box" key={el.id}>
                        <td className="autoservices__item autoservices__item--first">{el.type_of_work}</td>
                        <td className="autoservices__item autoservices__item--second">{el.work_title}</td>
                        <td className="autoservices__item autoservices__item--third">{el.services_counter}</td>
                    </tr>
                )) || <tr><td>Загрузка...</td></tr>
            }
        </tbody>

    </table>   
    </section>
        )
    }
}

export default connect(store=>store)(Carservice);



