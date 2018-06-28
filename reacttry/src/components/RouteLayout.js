import React from 'react';
import Home from './Home';
import Tweets from './Tweets';
import { Route  } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import NotFound from './NotFound';
function RouteLayout(){
    return (
        <div>
            <Switch>
                <Route  path="/home" component={Home}/>
                <Route  path="/tweets" component={Tweets}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
}

export default RouteLayout;