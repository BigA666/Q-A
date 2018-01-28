import React, {Component} from 'react'

class Title extends Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div className='title'>{this.props.children}</div>
        )
    }
}
export default Title