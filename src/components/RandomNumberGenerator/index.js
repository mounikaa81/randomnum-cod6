// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onChange = () => {
    const random = Math.ceil(Math.random() * 100)

    this.setState({num: random})
  }

  render() {
    const {num} = this.state

    return (
      <div className="outer-con">
        <div className="inner-con shadow">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onChange}>
            Generate
          </button>
          <p className="num">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
