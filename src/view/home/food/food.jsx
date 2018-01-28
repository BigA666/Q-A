import React, {Component} from 'react' // 没用到React也要解构否则会报错
import {BrowserRouter, HashRouter, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from '@/component/header/header'
import BasicInfo from '@/component/basicInfo'
import RadioChecked from '@/component/radioChecked/radioChecked'
import MultiplePick from '@/component/multiplePick/multiplePick'

class Food extends Component {
    constructor () {
        super()
        this.callback = this.callback.bind(this)
        this.continueEvn = this.continueEvn.bind(this)
        this.multiplePickCallback = this.multiplePickCallback.bind(this)
        this.state = {
            bool: false
        }
    }
    continueEvn () {
        this.props.history.push({pathname: '/home/food2'})
    }
    callback (bool) {
        this.setState({
            bool: bool
        })
    }
    multiplePickCallback (data) {
        let arr = []
        data.map((item, index) => {
            if(item.bool){
                arr.push(item.content)
            }
        })
        this.props.food(arr)
    }
    render () {
        let arr = [
            {
                className: 'icon-yuanxing',
                content: '无',
                bool: true
            },
            {
                className: 'icon-yuanxing',
                content: '有',
                bool: true
            }
        ]
        let brr = [
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
                content: '青椒',
                bool: false
            }
        ]
        console.log(this.props.stateA) 
        // 如果mapStateToProps属性名与mapDispatchToProps中方法名重复，程序则会打印方法
        return (
            <div className='page'>
                <Header {...this.props}>基本信息</Header>
                <section>
                    <BasicInfo title='有无过敏食物' callback={this.continueEvn}>
                        <RadioChecked arr={arr} changeClass='icon-gou' callback={this.callback}></RadioChecked>
                        {this.state.bool && <MultiplePick arr={brr} callback={this.multiplePickCallback}></MultiplePick>}
                    </BasicInfo>
                </section>
                
            </div>
        )
        
    }
}
function mapStateToProps(state){
    return {
        getFood: state.food,
        stateA: state
    }
}
function mapDispatchToProps(dispatch){
    return {
        food(data){ 
            dispatch({
                type: 'food',
                data: data
            })
        }   
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Food)