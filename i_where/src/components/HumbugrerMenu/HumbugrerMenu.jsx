import React from 'react';
import './HumbugrerMenu.css';
import { Row, Col } from 'reactstrap';

class HumbugrerMenu extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Row className="Menu" xs="3">
                <Col xs="10">
                    <ul className="MenuContainer">
                        <li className="menuItem">מנהל</li>
                        <li className="menuItem">התחבר</li>
                    </ul>
                </Col>
            </Row>
        );
    }

}

export default HumbugrerMenu;
