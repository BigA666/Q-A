import React, {Component} from 'react' // 没用到React也要解构否则会报错
import {BrowserRouter, HashRouter, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from '../../../component/header/header'
import RadioChecked from '../../../component/radioChecked/radioChecked'

let questions = [
    '您的皮肤一抓就红，并出现抓痕吗？',
    '您平时痰多特别是咽喉部总感觉有痰堵着吗？',
    '您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西？',
    '您平时爱吃辣吗'
]
let changeArr = [
        {
            className: '',
            content: '没有',
            bool: true
        },
        {
            className: '',
            content: '很少',
            bool: true
        },
        {
            className: '',
            content: '有时',
            bool: true
        },
        {
            className: '',
            content: '经常',
            bool: true
        },
        {
            className: '',
            content: '总是',
            bool: true
        }
    ]
class Feeling extends Component{
    constructor (){
        super()
        this.btnClick = this.btnClick.bind(this)
        this.getData = this.getData.bind(this)
        this.brr = []
    }
    btnClick(){
        alert(1)
    }
    getData(data, index){

        this.brr[index]= data
        // console.log(this.brr)
        this.props.feelingFn(this.brr)
    }
    render(){
        let bb=1
        console.log(this.props.feeling)
        return (
            <div className='page feeling'>
                <Header {...this.props}>您感觉？</Header>
                <section>
                    <div className='content'>
                        {
                            questions.map((val, index) => {
                                return (
                                    <div key={index} className='item'>
                                        <p>
                                            <i className='iconfont icon-icon2'></i>{val}
                                        </p>
                                        <RadioChecked arr={changeArr} changeClass='' activeClass='active' parentIndex={index} get={this.getData} bb={bb}></RadioChecked>
                                    </div>
                                )
                                
                            })

                        }
                       
                    </div>
                    <button className='btn' onClick={this.btnClick}>提交</button>
                </section>
                
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        feeling: state.feelingFn
    }
}
function mapDispatchToProps(dispatch){
    return {
        feelingFn(data){
            // console.log(data)
            dispatch({
                type: 'feelingFn',
                data: data
            })
        }   
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Feeling)