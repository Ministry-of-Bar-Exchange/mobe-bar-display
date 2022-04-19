import React from 'react';
import { Col, Row } from 'reactstrap';

const Footer = () => {
    return (
        <div className="d-flex justify-content-center align-items-center footer">
            <Col md="12" className="p-2">
                <Row className='m-0 justify-content-center'>
                    <Col lg="2">
                        <div className="footerImg">
                            <img src="static/images/ic_mobe.png" alt="footer logo" className="w-100" />
                        </div>
                    </Col>
                    <Col lg="2">
                        <div>
                            <img src="static/images/google-play.png" alt="footer logo" className="w-75" />
                        </div>
                    </Col>
                    <Col lg="2">
                        <div>
                            <img src="static/images/apple.png" alt="footer logo" className="w-75" />
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="text-whites">
                            <p className="m-0 font-medium">19 April 2022</p>
                            <p className="m-0 font-medium">05:44:39 PM</p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default Footer;