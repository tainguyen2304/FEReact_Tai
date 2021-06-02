import React from 'react'

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "p-4 Popup-Wrapper">
                <h3 className='text-center'>Nhập Todo</h3>
                <input className='w-100 mb-2 ps-2' value = {this.props.valueInput} onChange={this.props.onChange}/>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-primary me-2' onClick={this.props.onAdd}>Save</button>
                    <button className='btn btn-secondary' onClick={this.props.onclick} >Cancel</button>
                </div>
        </div>
    )
}
}
