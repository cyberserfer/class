

import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom';

paths {
    'ANY_ROUTE': NavBar,
    '/': HomeView;
    '/items': ItemsView,
    '/orders': OrdersView

}

const HomeView = props => (
    <div>
        <h3> Items </h3>

        <ul>
            <li></li>
            <li></li>
        </ul>
    </div>
)

const ItemsView = props => (
    <div>
        <h3> Items </h3>

        <ul>
            <li></li>
            <li></li>
        </ul>
    </div>
)

const OrdersView = props => (
    <div>
        <h3> Items </h3>

        <ul>
            <li></li>
            <li></li>
        </ul>
    </div>
)

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <Link to="/">Home</Link>
                        <Link to="/item">Home</Link>
                        <Link to="/orders">Home</Link>
                    </header>
                    <Route exact path='/' component={HomeView} />
                    <Route path='/items' component={ItemsView} />
                    <Route path='/orders' component={OrdersView} />
                </div>
            </BrowserRouter>
        );
    }

}