import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

/**
 * 
 import Component from './component'
 ReactDOM.render(<Component value="show"/>, document.getElementById('app'))
*/

ReactDOM.render(
    <div>
        <Family lastName = 'Reis'>
            <Member name = 'Otavio' /> 
            <Member name = 'Gabriel' /> 
            <Member name = 'Edison ' /> 
        </Family>
    </div>
    , document.getElementById('app'))


