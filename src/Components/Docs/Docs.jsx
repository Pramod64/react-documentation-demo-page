import React, { Component } from 'react'
import { Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/docs.css'

export default class Docs extends Component {
    
  render() {
    return (
      <>
        <div id='main'>
            <h1 id='header'>Getting Started</h1>
            <p id='below-header'> This page is an overview of the React documentation and related resources.</p>
            <p><b>React</b> is a JavaScript library for building user interfaces. Learn what React is all about on <Nav ><Link to="/" ><h6 id='link-to-home'>our homepage</h6></Link></Nav> 
             or <Nav><Link to="/Tutorial" ><h6 id='link-to-home'>in the tutorial.</h6></Link></Nav> </p>
        </div>

        <div >
          <ul id='listing'>
            <li id='link-to-home'>Try React</li>
            <li id='link-to-home'>Learn React</li>
            <li id='link-to-home'>Staying Informed</li>
            <li id='link-to-home'>Versioned Documentation</li>
            <li id='link-to-home'>Something Missing?</li>
          </ul>
        </div>

        <div id='main'>
            <h1 id='header'>Try React</h1>
            <p id='below-header'> React has been designed from the start for gradual adoption, and <b>you can use as little or as much React as you need.</b> Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

            </p>     
        </div>

        <div id='main'>
            <h1 id='header'>Online Playgrounds</h1>
            <p id='below-header'> If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

            If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.
            </p>     
        </div>
      </>
    );
  }
}
