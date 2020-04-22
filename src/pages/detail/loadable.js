import Loadable from 'react-loadable';
import React from 'react'
import {Loading} from './style.js'
const LoadableComponent = Loadable({

    loader: () => import('./'),

    loading(){
        return (
            <Loading>Loading......</Loading>
        )
        
    }

});

export default ()=><LoadableComponent/>