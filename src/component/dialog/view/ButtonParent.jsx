import React, {Component} from 'react'

class ButtonParent extends Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div className='buttonParent'>{this.props.children}</div>
        )
    }
}
export default  ButtonParent