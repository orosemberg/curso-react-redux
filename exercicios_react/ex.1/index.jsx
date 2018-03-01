import React from 'react'
import ReactDOM from 'react-dom'
import {Primeiro, Segundo} from './component'

/**
 * 
 import Component from './component'
 ReactDOM.render(<Component value="show"/>, document.getElementById('app'))
*/

ReactDOM.render(
    <div>
        <Primeiro/>
        <Segundo/>
    </div>
    , document.getElementById('app'))


