import React, {Component} from 'react' // 没用到React也要解构否则会报错
import {BrowserRouter, HashRouter, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from '@/component/header/header'
import BasicInfo from '@/component/basicInfo'
import RadioChecked from '@/component/radioChecked/radioChecked'
import MultiplePick from '@/component/multiplePick/multiplePick'

class HateFood extends Component {
    constructor () {
        super()
        this.continueEvn = this.continueEvn.bind(this)
        this.clickFn = this.clickFn.bind(this)
        this.state={
                brr: [
                {
                    content: '羊肉',
                    bool: false
                },
                {
                    content: '海鲜',
                    bool: false
                },
                {
                    content: '芹菜',
                    bool: false
                },
                {
                    content: '胡萝卜',
                    bool: false
                },
                {
                    content: '韭菜',
                    bool: false
                },
                {
                    content: '西瓜',
                    bool: false
                },
                {
                    content: '洋葱',
                    bool: false
                },
                {
                    content: '青椒',
                    bool: false
                },
                {
                    content: '茴香',
                    bool: false
                },
                {
                    content: '香菜',
                    bool: false
                }
            ]
        }
       
    }
    continueEvn () {
        
        this.props.history.push({pathname: '/home/feeling'})
    }
    clickFn (index) {
        this.setState((state)=>{
           state.brr[index].bool = !state.brr[index].bool
           let arr = []
           state.brr.map((item, index)=>{
                if(item.bool){
                    arr.push(item.content)
                }
           })
           this.props.hateFoodFn(arr)
           return state
        })
    }
    render () {
        // console.log(this.props.hateFood) // 不懂为什么会打印两遍 // 因为你会先触发setState 然后render一遍，再触发redux,再render一遍，所以总共是render了两遍
        return (
            <div className='page hateFood'>
                <Header {...this.props}>基本信息</Header>
                <section>
                    <BasicInfo title='不喜欢吃的食物' callback={this.continueEvn}>
                    
                        <div className='content'>
                            {
                                this.state.brr.map((val, index) => {
                                    
                                    return (
                                        <span key={index} onClick={() => {this.clickFn(index)}}>
                                            <i  className={val.bool ? 'iconfont icon-goukuang': 'iconfont icon-weixuan'}></i>
                                            {val.content}
                                        </span>  
                                    )
                                })
                            }
                        </div>
                    
                    </BasicInfo>
                </section>
                
            </div>
        )
        
    }
}

function mapStateToProps(state){
    return {
        hateFood: state.hateFoodFn
    }
}
function mapDispatchToProps(dispatch){
    return {
        hateFoodFn(data){
            dispatch({
                type: 'hateFood',
                data: data
            })
        }   
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HateFood)