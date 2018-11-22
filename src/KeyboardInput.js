import React, { Component } from 'react'

class KeyboardInput extends Component {

  constructor (props) {
    super(props)

    this.calculateValueHandler = this.calculateValueFunc.bind(this)

    this.state = {
      value: 0,
      averageTypingRate: 0
    }

    this.keypresses = []
    this.rateHistory = []
  }

  calculateValueFunc () {
    this.keypresses.push(Date.now())

    // Limit the window to 30 keypresses
    if (this.keypresses.length > 30) {
      this.keypresses.shift()
    }

    if (this.keypresses.length > 1) {
      // Calculate the letters per minute
      const firstPress = this.keypresses[0]
      const lastPress = this.keypresses[this.keypresses.length - 1]

      const typingRate = (this.keypresses.length / (lastPress - firstPress)) * 5000

      this.rateHistory.push(typingRate)
      if (this.rateHistory.length > 30) {
        this.rateHistory.shift()
      }

      const averageTypingRate = Math.ceil(this.rateHistory.reduce((a, b) => a + b, 0) / this.rateHistory.length)

      this.setState((state, props) => {
        return {
          value: averageTypingRate
        }
      })
    }
  }

  render () {
    return (
      <>
        <label htmlFor='angry-typing'>Please enter your age</label>
        <p>Enter a number by adjusting your typing speed accordingly.</p>
        <input id='angry-typing' type='text' onChange={this.calculateValueHandler} name={this.props.name} value={this.state.value} />

        <div style={{ 'position': 'relative', 'height': `${Math.ceil(Math.max(...this.rateHistory)) + 15}px`, 'paddingLeft': '30px', 'width': '50%' }}>          
          {/* Bars */}
          {this.rateHistory.map((rate, index) => (
            <div key={index} style={{ 'position': 'absolute', 'left': `${index * 5}px`, 'bottom': 0, 'width': '5px', 'background': 'green', 'height': `${rate}px` }} />
          ))}

          {/* Min / max indicators */}
          <div style={{ 'position': 'absolute', 'top': 0, 'left': 0 }}>{Math.ceil(Math.max(...this.rateHistory)) }</div>
          <div style={{ 'position': 'absolute', 'bottom': 0, 'left': 0 }}>0</div>

          {/* Average line */}
          <div style={{ 'position': 'absolute', 'background': 'black', 'height': '1px', 'width': '100%', 'left': 0, 'bottom': `${this.state.value}px` }} />
        </div>
      </>
    )
  }
}

export default KeyboardInput
