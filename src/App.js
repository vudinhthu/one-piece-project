import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "@pages/Home";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "tailwindcss/tailwind.css"
import '@assets/main.scss';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
