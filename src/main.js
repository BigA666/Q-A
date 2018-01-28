import React, {Fragment} from 'react'

import ReactDOM from 'react-dom'
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'

import './common/font/iconfont.css'
import './common/css/style.css'

import router from './router/router.config'
// 利用递归
function recursion (router) {
    let brr = []
    
    router.map((val, index) => {
       
        if(val.children){

            brr = brr.concat(recursion(val.children))
            brr.push(<Route key={index} path={val.path} render={(props) => <val.component {...props}/>} />)
        }else{
            brr.push(<Route key={index} path={val.path} render={(props) => <val.component {...props}/>} />)
        }

    })
    return brr
}
 
ReactDOM.render(
    
    <Provider store={store}>
        <HashRouter>
            <Fragment>
                <Switch>
                        <Redirect exact from='/' to='/home/start' />
                        {recursion(router)}
                    {/* {
                        router.map((val, index) => {
                            
                            return (
                                <Route key={index} path={val.path} render={(props) => <val.component {...props} childrenPath={val.children}/>} />
                            )
                        })
                    } */}
                </Switch>
            </Fragment>
        </HashRouter>
    </Provider>            
   ,
    document.querySelector('#root')
)