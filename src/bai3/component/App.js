import React from 'react'
import Popup from './Popup'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input:'',
            ToDoList : [],
            display:false,
        }
    }
    handleChange(e) {
        this.setState({
            input:e.target.value,
        })
    }
    handleDisplay = () => {
        this.setState(state => ({
            display:!state.display,
        }))
    }
    handleAdd () {
        if(this.state.input) {
            this.setState({
            ToDoList: [...this.state.ToDoList,this.state.input],
            input: '',
        })
        }
    }
    handleRemove = (index)  => {
        this.state.ToDoList.splice(index,1);
        this.setState({
            ToDoList: this.state.ToDoList,
        })
    }
    

    render() {
        let listWork = this.state.ToDoList.map((nameWork,index) => <div key={index} className='d-flex justify-content-between' >{nameWork}
        <span onClick={() => this.handleRemove(index)} className='fw-bold'>X</span></div>)
        let count = this.state.ToDoList.length;
        return (
            <div className='container'>
            <div className='ToDoList-wrapper'>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-primary' onClick={this.handleDisplay}>Thêm Todo</button>
                    <span className='p-3 fw-bold h4'>{count}</span>
                </div>
                <div className='list-work'>{listWork}</div>
            </div>
            { this.state.display && <Popup onclick = {this.handleDisplay.bind(this)} onChange= {this.handleChange.bind(this)}
             valueInput={this.state.input} onAdd={this.handleAdd.bind(this)}></Popup>
            }
        </div>
    )
}
}
