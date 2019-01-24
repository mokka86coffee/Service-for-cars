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
        <thead>
            <tr>
                <td>
                    <p>Категория работ
                        <div className="filtersm_btns">
                            <span onClick={this.typeSort} className="filtersm_btn filtersm_btn--up"></span>
                            <span onClick={this.typeSortReverse} className="filtersm_btn filtersm_btn--down"></span>
                        </div>
                    </p>
                    <select onFocus={e=>e.target.classList.add('active')} onBlur={e=>e.target.classList.remove('active')} onChange={this.typeFilter} value={typeOfWork} name="type_of_work" id="type_of_work">
                        <option value="Все категории">Все категории</option>
                        {
                            types.length && types.map((el, i) => 
                            <option key={i} value={el}>{el}</option>)
                        }
                    </select>
                </td>
                <td colSpan="2">
                    <p>Вид работы
                        <div className="filtersm_btns">
                            <span onClick={this.titleSort} className="filtersm_btn filtersm_btn--up"></span>
                            <span onClick={this.titleSortReverse} className="filtersm_btn filtersm_btn--down"></span>
                        </div>
                    </p>
                    <select onChange={this.workFilter} onBlur={e=>e.target.classList.remove('active')} onFocus={e=>e.target.classList.add('active')} value={workTitle} name="work_title" id="work_title">
                        <option value="Любые работы">Любые работы</option>
                        {
                            list.length && list.map((el, i) => 
                            <option key={i} value={el.work_title}>{el.work_title}</option>)
                        }
                    </select>
                </td>
{/* 
                <th><button onClick={this.servicesSort}>Services</button></th>
                <th><button onClick={this.servicesSortReverse}>Services Reverse</button></th> */}
            </tr>
        </thead>
        <tbody>
            {
                works.length && works.map(el=>(
                    <tr key={el.id}>
                        <td>{el.type_of_work}</td>
                        <td>{el.work_title}</td>
                        <td>{el.services_counter}</td>
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



