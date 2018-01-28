import React, {Component} from 'react' // 没用到React也要解构否则会报错
import {BrowserRouter, HashRouter, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from '@/component/header/header'
import BasicInfo from '@/component/basicInfo'
import RadioChecked from '@/component/radioChecked/radioChecked'
import MultiplePick from '@/component/multiplePick/multiplePick'

class Sex extends Component {
    constructor () {
        super()
        this.callback = this.callback.bind(this)
        this.continueEvn = this.continueEvn.bind(this)
        this.state = {
            bool: false
        }
        this.multiplePickCallback = this.multiplePickCallback.bind(this)
    }
    continueEvn () { // 点击 BasicInfo 继续按钮的回调

        this.props.history.push({pathname: '/home/food1'})
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
        this.props.getHistory(arr)
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
                content: '心脏病',
                bool: false
            },
            {
                content: '冠心病',
                bool: false
            },
            {
                content: '肺癌',
                bool: false
            },
            {
                content: '肝病',
                bool: false
            },
            {
                content: '心血管堵塞',
                bool: false
            }
        ]
        {console.log(this.props.historyArr)}
        return (
            <div className='page'>
                <Header {...this.props}>基本信息</Header>
                <section>
                    <BasicInfo title='有无病史' callback={this.continueEvn}>
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
        historyArr: state.history
    }
}
function mapDispatchToProps(dispatch){
    return {
        getHistory(data){
            dispatch({
                type: 'getHistory',
                data: data
            })
        }   
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Sex)