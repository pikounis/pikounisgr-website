import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, OurFish, Gallery, Awards, Contact } from 'routes';
import ButtonAppBar from 'components/buttonAppBar';
// Match locales with regular expression containing each locale separated by `|`
const base = '/:locale(en|el)?';

const App = () => (
    <div className="App">
        <Router>
            <ButtonAppBar>
                <Switch>
                    <Route path={base} exact component={Home} />
                    <Route path={`${base}/about`} component={About} />
                    <Route path={`${base}/our-fish`} component={OurFish} />
                    <Route path={`${base}/gallery`} component={Gallery} />
                    <Route path={`${base}/awards`} component={Awards} />
                    <Route path={`${base}/contact`} component={Contact} />
                </Switch>
            </ButtonAppBar>
        </Router>
    </div>
);

export default App;
