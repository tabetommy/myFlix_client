import React from 'react';
import ReactDOM from 'react-dom/client';
import MainView from './components/main-view/main-view';
import Container from 'react-bootstrap/Container'

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <MainView />
      </Container>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];


// Tells React to render your app in the root DOM element
const appRootContainer = ReactDOM.createRoot(container);
appRootContainer.render(
  <MyFlixApplication />
)
// ReactDOM.render(React.createElement(MyFlixApplication), container);
