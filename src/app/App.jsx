import React, { Component } from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Header from './Header.jsx';
import Search from './Search.jsx';
import BirdList from './BirdList.jsx';
import MapContainer from './map/MapContainer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <BirdList />
        <MapContainer />
      </div>
    );
  }
}
export default App;


// import React, { Component } from 'react'
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
// const App = () => (
//   <div>
//     <h1> Hello World </h1>
//     <Header />
//     <BirdList />
//     <Map />
//   </div>
// )
// class App extends Component {
//   render(){
//     return(
//       <Router history={hashHistory}>
//         <Route path='/'component={Home} />
//         <Route path='/login' component={Login} />
//         <Route path='/signup' component={Signup} />
//       </Router>
//     )
//   }
// }

// const Home = () => <h1>Hello World!</h1>
// const Login = () => <h1> Login Page </h1>
// const Signup = () => <h1> Sign up Page </h1>

// import React, { Component } from 'react'
// import { Router, Route, Link, IndexRoute, HashRouter, browserHistory } from 'react-router';

// class App extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <Route path='/' component={Home} />
//         <Route path='/address' component={Address} />
//       </HashRouter>
//     )
//   }
// }

// const Home = () => <h1>Hello from Home!</h1>
// const Address = () => <h1>We are located at 555 Jackson St.</h1>

// export default App