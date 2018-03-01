import React from 'react'
import {childrenWithProps} from '../utils/reactUtils.js'

export default props => (
    <div>
        <h1>Familia</h1>
        { /* {props.children} */ }
        { /*{React.cloneElement(props.children, {...props})}}*/  }
        {childrenWithProps(props.children, props)}

    </div>

)