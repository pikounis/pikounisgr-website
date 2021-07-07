import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from 'routes';

const App = () => (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    </div>
);

export default App;
