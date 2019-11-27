import React from 'react';
import './SubmitShift.css';
import { Row, Col } from 'reactstrap';

function SubmitShift() {
    return (
        <Col className="LoginContainer" xs="12">
            <Col xs="12" className="Inputdiv">
                <div>היי תומר</div>
            </Col>
            <Col className="Inputdiv" xs="12">
                <input className="EnterShift" type="button" value="כניסה למשמרת" />
            </Col>

            <Col className="Inputdiv" xs="12">
                <input className="Break" type="button" value="יציאה להפסקה" />
            </Col>

            <Col className="Inputdiv" xs="8">
                <input className="QuitShift" type="button" value="יציאה מהמשמרת" />
            </Col>
        </Col>
    );
}


export default SubmitShift;
