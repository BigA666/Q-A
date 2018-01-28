import React, {Component} from 'react'

class Masker extends Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div className='masker'>{this.props.children}</div>
        )
        
    }
}
export default Masker