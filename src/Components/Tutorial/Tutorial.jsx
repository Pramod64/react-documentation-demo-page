import React, { Component } from 'react'
import './Tutorial.css'

export default class Tutorial extends Component {
  render() {
    return (
      <>
        <div id='main'>
            <h1 id='header'>Tutorial:Intro to React</h1>
            <p id='below-header'> This tutorial doesn’t assume any existing React knowledge.</p>
            
        </div>

        <div id='main'>
            <h1 id='header'>Before We Start the Tutorial</h1>
            <p id='below-header'> We will build a small game during this tutorial. <b>You might be tempted to skip it because you’re not building games — but give it a chance. </b>The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React.

            </p>     
        </div>

        <div id='tip'>
            <h1 id='head'>Tip</h1>
            <p id='below-head'> This tutorial is designed for people who prefer to learn by doing. If you prefer learning concepts from the ground up, check out our step-by-step guide. You might find this tutorial and the guide complementary to each other.
            </p>     
        </div>

      </>
    )
  }
}
