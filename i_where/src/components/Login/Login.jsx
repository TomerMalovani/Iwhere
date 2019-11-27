import React from 'react';
import './Login.css';
import { Row, Col } from 'reactstrap';

function Login() {
    return (
        <Col className="LoginContainer" xs="12">
            <Col className="Inputdiv" xs="12">
                <input className="Logininput" type="number" placeholder="קוד עובד" />
            </Col>

            <Col className="Inputdiv" xs="8">
                <input className="LogininputBtn" type="button" value="יציאה" />
            </Col>
        </Col>
    );
}


export default Login;
