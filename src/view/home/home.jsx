import React, {Fragment, Component} from 'react'

import ReactDOM from 'react-dom'
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom'

class Home extends Component{
    constructor(){
        super()

    }
    render(){
        
        return (
            <Fragment>
                {[55, 66, 77]}
                {/* <Switch>
                    {
                    //     this.props.childrenPath.map((val, index) => {
                    //         // 最好不加 exact
                    //         return (
                    //             <Route key={index} path={val.path} render={(props) => <val.component {...props} childrenPath={val.children}/>} />
                    //         )

                    //    })
                        
                    }  
                </Switch> */}
            </Fragment>
        )
        
    }
}
export default Home