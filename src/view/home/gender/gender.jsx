import React, {Component} from 'react' // 没用到React也要解构否则会报错
import {BrowserRouter, HashRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from '@/component/header/header'
import Dialog from '@/component/dialog'
import BasicInfo from '@/component/basicInfo'
import RadioChecked from '@/component/radioChecked/radioChecked'
import mapStateToProps from './reducer'
import mapDispatchToProps from './action'
/** 
 * continueEvn 点击继续的回调
 * dialogCallback 点击弹框确定
*/
class Gender extends Component {
    constructor () {
        super()
        this.continueEvn = this.continueEvn.bind(this)
        this.dialogCallback = this.dialogCallback.bind(this)
        this.genderFn = this.genderFn.bind(this)
        this.getGender = this.getGender.bind(this)
    }
    continueEvn () {
        this.refs.dialog.open() // 打开弹出框
    }
    dialogCallback () {
       
        this.props.history.push({pathname: '/home/history'})
    }
    genderFn (index, content) {
        this.refs.radioChecked.clickFn(index, content)
    }
    getGender(sex){
        this.props.update_gender(sex)
        // console.log(this.props.gender) // 还获取不到redux的数据 因为比this.props.update_gender() 早执行
       
    }
    render () {
        let arr = [
            {
                className: 'icon-yuanxing',
                content: '我是男神',
                bool: true
            },
            {
                className: 'icon-yuanxing',
                content: '我是女神',
                bool: true
            }
        ]
        console.log(this.props.gender)// 能够获取到redux的数据
        return (
           
            <div className='gender'>
                <Header {...this.props}>基本信息</Header>
                <section>
                    <BasicInfo title='请选择您的性别' callback={this.continueEvn}>
                        <div className='genderDiv'>
                            
                            <i className='iconfont icon-nan' onClick={() => {
                                this.genderFn(0, '我是男神')
                            }}></i>
                                <i className='iconfont icon-nv' onClick={() => {
                                this.genderFn(1, '我是女神')
                            }}></i>
                            
                        </div>
                        <RadioChecked arr={arr} changeClass='icon-gou' ref='radioChecked' getData={this.getGender}></RadioChecked>

                    </BasicInfo>
                        
                </section>
                
                <Dialog ref='dialog' callback={this.dialogCallback}></Dialog>

            </div>
        )
        
    }
}
// export default Gender
export default connect(mapStateToProps, mapDispatchToProps)(Gender)