import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'

import '../css/style.css'


import Button from '@/component/button'

class BasicInfo extends Component{
    constructor () {
        super()
        
    }
    render () {
        
        return (
            <Fragment>
                <img src='src/common/images/bg.png' className='bg'/>
                <div className='content'>
                    <p className='title'>{this.props.title}</p>
                    {this.props.children}
                </div>
                <Button className='next' callback={this.props.callback}>继续</Button>
            </Fragment>
        )
    }
}
export default BasicInfo