import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Button extends Component{
    constructor () {
        super()
        this.btnClick = this.btnClick.bind(this)
    }
    btnClick () { // 点击之后调用回调函数
        this.props.callback()
    }
    render () {
        return (
            <button className={this.props.className} onClick={this.btnClick}>{this.props.children}</button>
        )
    }
}
export default Button