import React, { Component } from 'react'
import logo from './images/open-source.png'
import './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className='footer-content row'>
            <div className='col-sm'>
                <ul id='u-list'>
                  <li><img id='fb-open-source' src={logo} alt=''/></li>
                  <li>Copyright © 2021 Meta Platforms, Inc.</li>
                </ul>
            </div>
            <div className='col-sm'>
              <p id='docs'>DOCS</p>
            <ul id='u-list'>
                  <li>Installation</li>
                  <li>Main concept</li>
                  <li>Advanced Guides</li>
                  <li>API Reference</li>
                  <li>Hooks</li>
                  <li>Testing</li>
                  <li>Contributing</li>
                </ul>
            </div>
            <div className='col-sm'>
            <p id='docs'>CHANNELS</p>
            <ul id='u-list'>
                  <li>Git Hub</li>
                  <li>Stak Overflow</li>
                  <li>Discussion Forums</li>
                  <li>Reactiflix chat</li>
                  <li>Dev Community</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                </ul>
            </div>
        </div>
      </>
    )
  }
}
