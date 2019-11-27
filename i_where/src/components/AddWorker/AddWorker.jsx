import React from 'react';
import './AddWorker.css';
import { Row, Col } from 'reactstrap';

function AddWorker() {
    return (
        <Col className="LoginContainer" xs="12">
            <Col className="Inputdiv" xs="12">
                <input className="Logininput" type="text" placeholder="שם עובד" />
            </Col>
            <Col className="Inputdiv" xs="12">
                <input className="Logininput" type="text" placeholder="עיר מגורים" />
            </Col>
            <Col className="Inputdiv" xs="8">
                <input className="LogininputBtn" type="button" value="הוסף עובד" />
            </Col>
        </Col>
    );
}


export default AddWorker;
