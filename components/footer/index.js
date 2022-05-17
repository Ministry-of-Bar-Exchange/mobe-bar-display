import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';

const Footer = () => {
    const [date, setDate] = useState(new Date());
    const [time,setTime] = useState(null)
    let dates = date?.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    }, [])
    useEffect(()=>{
        setTime(date?.toLocaleTimeString())
    },[date])
    return (
        <div className="d-flex justify-content-center align-items-center footer">
            <Col md="12" className="px-2">
                <Row className='m-0 justify-content-center'>
                    <Col lg="2">
                        <a className="footerImg">
                            <img src="static/images/ic_mobe.png" alt="footer logo" className="w-100" />
                        </a>
                    </Col>
                    <Col lg="2">
                        <a>
                            <img src="static/images/google-play.png" alt="footer logo" className="w-75" />
                        </a>
                    </Col>
                    <Col lg="2">
                        <a>
                            <img src="static/images/apple.png" alt="footer logo" className="w-75 " />
                        </a>
                    </Col>
                    <Col lg="2">
                        <div className="text-whites">
                            <p className="m-0 font-lg">{dates}</p>
                            <p className="font-lg time">{`${time}`}</p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default Footer;