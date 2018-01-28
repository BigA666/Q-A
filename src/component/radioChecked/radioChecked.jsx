import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './css/style.css'

class RadioChecked extends Component{
    constructor () {
        super()
        this.clickFn = this.clickFn.bind(this)
        this.state = {
            arr: []
        }
    }
    clickFn (index, content, parentIndex) {
       
        this.setState((state) => {
            state.arr.map((val, key) => {
                state.arr[key].bool = true
            })
            state.arr[index].bool = false
            return state
        })
        if(this.state.arr[index].content == '有'){
            this.props.callback(true)
           
        }else if(this.state.arr[index].content == '无'){
            this.props.callback(false)
        }
        this.props.getData && this.props.getData(content)
        this.props.get && this.props.get(content, parentIndex)
        // console.log(this.state)
    }
    componentWillMount () {
        this.setState((state) => {
        // console.log(this.props.arr)
           state.arr = JSON.parse(JSON.stringify(this.props.arr))  // 所以复制时要进行深拷贝，当对象里没有函数时可用此方法进行深拷贝
        // state.arr = this.props.arr  // 直接赋值这行代码不行  会相互影响
           return state
        })
        // this.props.bb=2 // 报错
        // console.log(this.props.bb)

    }
    render () {
        let changeClass = 'iconfont ' + this.props.changeClass
        
        return (
            <div className='radioChecked'>
                   
                {
                    
                    this.state.arr.map((val, index) => {
                        let className = 'iconfont '+ val.className
                        let activeClass = this.props.activeClass? 'radioSpan '+this.props.activeClass: 'radioSpan'
                        return (
                            <span key={index} onClick={() => {this.clickFn(index, val.content, this.props.parentIndex)}} className={val.bool ? 'radioSpan':activeClass}>
                                <i className={val.bool ? className:changeClass}></i>
                                {val.content}
                            </span>
                        )
                    })
                }
            </div>
        )
    }
}
export default RadioChecked