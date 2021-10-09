import React from 'react';
import './App.css';
import Users from './component/Users.js';
import Counter from './component/Counter.js';
import HeroName from './component/HeroName.js';


class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <h1>My First React app</h1>
      </header>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem elit, vel convallis lectus tristique et. Ut cursus sodales elit, ut condimentum purus congue et. Suspendisse pretium non lectus ut viverra. Cras viverra metus feugiat ligula eleifend porta. Ut sapien odio, imperdiet et consequat non, lacinia ut urna. Pellentesque viverra orci quis sem hendrerit, nec  convallis tellus varius. 
       </p>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>&copy; My self - 2021</p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
        <hr />
        <Users />
        <hr />
        <Counter />
        <hr />
        <HeroName />
      </div>
    );
  }
}

export default App;