import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import './css/Home.css'


export default class Home extends Component {
  
  render() {
    return (
      <>
        <div className='content'>
        <h1 id='react'>React</h1>
          <p id='main-paragraph'>
            A javascript library for building User Interface
          </p>
         <p id='btn-get-started'>
           <Button class="btn" bsStyle="primary">Get Started</Button>&nbsp;
           <a href='#tutorial'>Take the Tutorial &gt;</a>
        </p>
        </div>
         {/* Card */}
         <div class="row" id='body'>
              <div class="col-sm">
                  <h4>Declaration</h4>
                  <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.</p>
              </div>
              <div class="col-sm">
              <h4>Declaration</h4>
                  <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.</p>
              </div>
              <div class="col-sm">
              <h4>Declaration</h4>
                  <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.</p>
              </div>
         </div>


            {/* Footer */}
            <div className='footer'>
         <p id='btn-get-started'>
           <Button class="btn" bsStyle="primary">Get Started</Button>&nbsp;
           <a href='#tutorial'>Take the Tutorial &gt;</a>
        </p>
        </div>

        
      </>
    )
  }
}
