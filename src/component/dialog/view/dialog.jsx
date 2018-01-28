import React, {Component} from 'react'
import '../css/dialog.css'
import Masker from './masker.jsx'
import Title from './title.jsx'
import Message from './message.jsx'
import ButtonParent from './ButtonParent.jsx'
import Button from './Button.jsx'
/* *
 *Dialog Component 
 * @callback function 点击确定按钮的回调
 * 
 * @open function 唤起弹出框组件
*/
class Dialog extends Component{
    constructor () {
        super()
        this.state = {
            isShow: false
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }

    open () {
        this.setState((state) => {
            state.isShow = true 
            return state
        })
    }

    close () {
       
        this.setState((state) => {
            state.isShow = false
            return state
        })
        
    }

    render () { 
        
        return (this.state.isShow && <div className='dialog' >
            <Masker>
                <Title><span className='close' onClick={this.close}>x</span></Title>
                <Message>
                    
                </Message>
                <ButtonParent>
                    <Button callback={this.props.callback}>开始测试</Button>
                </ButtonParent>
            </Masker>
        </div>)
    }
}

export default Dialog
