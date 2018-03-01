import React from 'react'

function childrenWithProps(children, props) {
    return React.Children.map(props.children, c => React.cloneElement(c, {...props}))
}

export {childrenWithProps}