import React from 'react'

export default class  Casio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                id:1,
                key:'7',
                },
                    {
                id:2,
                key:'8',
                },
                {
                id:3,
                key:'9',
                },
                    {
                id:4,
                key:'/',
                },
                {
                id:5,
                key:'4',
                },
                    {
                id:6,
                key:'5',
                },
                {
                id:7,
                key:'6',
                },
                    {
                id:8,
                key:'*',
                },
                     {
                id:9,
                key:'1',
                },
                {
                id:10,
                key:'2',
                },
                    {
                id:11,
                key:'3',
                },
                     {
                id:12,
                key:'+',
                },
                {
                id:13,
                key:'0',
                },
                    {
                id:14,
                key:'.',
                },
                     {
                id:15,
                key:'=',
                },
                {
                id:16,
                key:'-',
                },
                ],
            valueScreen: '',
            isSum : true,
        }
    }
    handleClick = (item) => {
        if(!this.state.isSum) {
            this.setState({
                valueScreen:'',
                isSum:true,
            })
        }
        else if(item.key !== '='){
            this.setState({
                valueScreen: this.state.valueScreen += item.key,
            })
        }
        else  {
            try{
                this.setState({
                    valueScreen: eval(this.state.valueScreen) == 'Infinity'? 'Error' :eval(this.state.valueScreen),
                    isSum:false,
                });
            }
            catch(err) {
                this.setState({
                    valueScreen:'Error',
                    isSum:false,
                })
            }
        }
    }

    render() {
        let keyBoards =  this.state.data.map(item =>
        <div className='item'>        
            <button onClick={() => this.handleClick(item)}  className='p-4'>{item.key}</button>
        </div>
        );
        
        return (
            <div className='main p-4'>
                <div className='casio'>
                    <h3 className='pb-3 text-center'>Máy tính <soan className='text-primary fw-bold'>CASIO</soan> Online</h3>
                    <div className='screen'>{this.state.valueScreen}</div>
                    <div className="grid">{keyBoards}</div>
                </div>
            </div>
        )
    }
}
