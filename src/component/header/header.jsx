import React, {Component} from 'react'

class Header extends Component {
    constructor () {
        super()
        this.back = this.back.bind(this)
    }
    back () {
        console.log(this.props)
        if(this.props.history){
            this.props.history.go(-1)
        }
        
    }
    render () {
        return (
            <header>
                <div className='back' onClick={this.back}>
                    <i className='iconfont icon-shangyige'></i>
                    返回
                </div>
                <h3>{this.props.children}</h3>
            </header>
        )
        
    }
}
export default Header