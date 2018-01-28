import React, {Component} from 'react' // 没用到React也要解构否则会报错
import {BrowserRouter, HashRouter, Route, Redirect} from 'react-router-dom'

import Header from '@/component/header/header'
import Button from '@/component/button'
class Start extends Component {
    constructor () {
        super()
        this.begin = this.begin.bind(this)
    }
    begin () {
        this.props.history.push('/home/gender')
    }
    render () {
    
        return (
            <div className='index'>
                <Header {...this.props}>小鲜测评</Header>
                <section>
                    <img src='src/common/images/home.png' className='bg'/>
                    <Button callback={this.begin}>开始</Button>
                </section>
            </div>
        )
        
    }
}
export default Start