import { Component } from 'react'
class TipCalculator extends Component{
    constructor (props){
        super(props)
        this.state={
            bill: 0,
            tip: 0, 
            people: 1
        }
    }
    render (){
        return(
            <form>
                <h1>Bill: {this.state.bill}</h1>
                <h1>Tip: {this.state.tip}%</h1>
                <h1>Total/Person: {((parseInt(this.state.bill) + ((parseInt(this.state.bill) * parseInt(this.state.tip)) / 100))/parseInt(this.state.people)).toFixed(2)}</h1>
                <input
                    placeholder = 'Bill'
                    type = 'number'
                    value = {this.state.bill}
                    onChange = {(e) => {this.setState({bill: e.target.value})}}
                />
                <input
                    placeholder = 'Tip'
                    type = 'number'
                    value = {this.state.tip}
                    onChange = {(e) => {this.setState({tip: e.target.value})}}
                />
                <input
                    placeholder = 'People'
                    type = 'number'
                    value = {this.state.people}
                    onChange = {(e) => {this.setState({people: e.target.value})}}
                />
            </form>
        )
    }
}
export default TipCalculator