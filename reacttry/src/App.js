import React , {Component} from 'react';
import Nav from './components/Nav';
import RouteLayout from './components/RouteLayout';

class App extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <RouteLayout/>
            </div>
        );
    }
}


export default App;