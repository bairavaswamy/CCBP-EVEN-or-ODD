import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: 'Even'}

  onButton = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({isEven: randomNum % 2 === 0 ? 'Even' : 'Odd'})
    this.setState({count: randomNum})
  }

  render() {
    const {count, isEven} = this.state
    return (
      <div className="outside-container">
        <div className="card-container">
          <h1 className="count-heading">Count {count}</h1>
          <div className="count-even-odd">
            <p className="heading">Count is {isEven}</p>
            <button type="button" className="btn" onClick={this.onButton}>
              Increment
            </button>
            <p className="para">*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
