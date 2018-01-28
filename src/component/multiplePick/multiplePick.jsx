import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {PropTypes} from 'prop-types'

import './css/style.css'

class MultiplePick extends Component{
    // static propTypes ={      
    //     arr: PropTypes.string.isRequired        
    // }
    constructor () {
        super()
        this.clickFn = this.clickFn.bind(this)
        this.state = {
            arr: []
        }
    }
    clickFn = (index) => {  // npm install babel-plugin-transform-class-properties -D 支持当前这种语法   还要去.babelrc  中 加一句  "plugins":["transform-class-properties"]
        
        this.setState((state) => {
            state.arr[index].bool = !state.arr[index].bool
            this.props.callback(state.arr)
            return state
        })
    }
    componentWillMount () {
        this.setState((state) => {
           state.arr = this.props.arr
           return state
        })
        
    }
    render () {
        
        return (
            <div className='multiplePick'>
                {
                    this.state.arr.map((val, index) => {
                        return <span key={index} className={val.bool ? 'active': ''} onClick={()=>{this.clickFn(index)}}>
                            {val.content}
                        </span>
                    })
                } 
            </div>
        )
    }
}

// 写在class内的  ==  MultiplePick.prototype.fn
// 写在constructor里的  == 写在 function MultiplePick(){this.fn=function(){}}里


// MultiplePick.propTypes = {                       ===  function MultiplePick(){
//     arr: PropTypes.string.isRequired                   this.propTypes={}        }
// } // 意思是 传入的arr属性必须填并且要为string类型

//===================// static propTypes ={      //
    //     arr: PropTypes.string.isRequired        
    // }


// console.log(new MultiplePick())
export default MultiplePick