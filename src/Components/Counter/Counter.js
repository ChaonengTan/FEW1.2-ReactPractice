import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 0 }
    
  }

  increment() {
    if (this.checkMax()){
      this.setState({ count: this.state.count + this.props.step })
    }
  }

  decrement() {
    if (this.checkMin()){
      this.setState({ count: this.state.count - this.props.step })
    }
  }

  checkMin() {
    if ((this.state.count - this.props.step) < this.props.min){
      return false
    }
    return true
  }

  checkMax() {
    if ((this.state.count + this.props.step) > this.props.max){
      return false
    }
    return true
  }

  render() {
    return (
      <div className="counter">
        <button className='minus' onClick={(e) => {
          this.decrement()
        }}>-</button>
        <h1>{this.state.count}</h1>
        <button className='plus' onClick={(e) => {
          this.increment()
        }}>+</button>
      </div>
    )
  }
}

export default Counter