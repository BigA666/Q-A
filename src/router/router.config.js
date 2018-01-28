import Home from '../view/home/home'
import Start from '../view/home/start/start'
import Gender from '../view/home/gender/gender'

import History from '../view/home/history/history'
import Food from '../view/home/food/food'
import HateFood from '../view/home/hateFood/hateFood'
import Feeling from '../view/home/feeling/feeling'

const RouterConfig = {
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/home/start',
                    component: Start
                },
                {
                    path: '/home/gender',
                    component: Gender
                },
                {
                    path: '/home/history',
                    component: History
                },
                {
                    path: '/home/food1',
                    component: Food
                },
                {
                    path: '/home/food2',
                    component: HateFood
                },
                {
                    path: '/home/feeling',
                    component: Feeling
                }
            ]
        }
    ]
}

export default RouterConfig.routes