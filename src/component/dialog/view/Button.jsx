import React, {Component} from 'react'

class Button extends Component {
    constructor () {
        super()
        this.buttonClick = this.buttonClick.bind(this)
    }
    buttonClick () {
        this.props.callback()
    }
    render () {
        return (
            <button className='button' onClick={this.buttonClick}>{this.props.children}</button>
        )
    }
}
export default Button