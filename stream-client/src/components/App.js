import React from 'react';
//import { BrowserRouter , Route } from 'react-router-dom';
import { Router , Route , Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header';
import history from '../history';

// **** HashRouter means we can get specific html rather then response from server.

// if using  <a href="/pagetwo"><button>Click Me!</button></a> to change path
// will get a new request but we need to keep original state.

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={(props) => <StreamCreate {...props}/> } />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;