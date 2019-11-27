import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import AddWorker from './components/AddWorker/AddWorker';
import Login from './components/Login/Login';
import SubmitShift from './components/SubmitShift/SubmitShift';
import HumbugrerMenu from './components/HumbugrerMenu/HumbugrerMenu'
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Container fluid className="App"  >
        <Row className="appRow">
          <HumbugrerMenu />
          {/* <AddWorker /> */}
          {/* <Login /> */}
          <SubmitShift />
        </Row>
      </Container >
    );
  }

}

export default App;
