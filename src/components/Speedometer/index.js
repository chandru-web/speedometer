import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrementSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrementSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedometer-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-img"
        />
        <div className="text-container">
          <h2 className="second-heading">
            Speed is<span className="mph">{speed}</span>mph
          </h2>
          <p className="speed-description">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
          <div className="buttons-container">
            <button
              type="button"
              className="accelerate-button"
              onClick={this.onIncrementSpeed}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="apply-break-button"
              onClick={this.onDecrementSpeed}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
