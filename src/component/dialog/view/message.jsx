import React, {Component} from 'react'

class Message extends Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div className='message'>{this.props.children}</div>
        )
    }
}
export default  Message