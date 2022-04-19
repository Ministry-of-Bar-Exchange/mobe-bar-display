import React from 'react';
import { Col, Row } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WiDirectionUp } from "react-icons/wi";
const ProductSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows:false,
        autoplay:true,
        slidesToShow: 6,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings} className="bg-grey pt-2 pb-2 slider">
                <div>
                    <Col md="12" lg="12">
                        <Row className="m-0">
                            <Col>
                                <div className="productBox">
                                    <WiDirectionUp className="red"/>
                                    <div className="productPrices">
                                        <span className="red">199</span>
                                    </div>
                                    <p className="productName text-uppercase text-whites">
                                        product name
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div>
                    <Col md="12" lg="12">
                        <Row className="m-0">
                            <Col>
                                <div className="productBox">
                                    <WiDirectionUp className="red"/>
                                    <div className="productPrices">
                                        <span className="red">199</span>
                                    </div>
                                    <p className="productName text-uppercase text-whites">
                                        product name
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div>
                    <Col md="12" lg="12">
                        <Row className="m-0">
                            <Col>
                                <div className="productBox">
                                    <WiDirectionUp className="red" />
                                    <div className="productPrices">
                                        <span className="red">199</span>
                                    </div>
                                    <p className="productName text-uppercase text-whites">
                                        product name
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div>
                    <Col md="12" lg="12">
                        <Row className="m-0">
                            <Col>
                                <div className="productBox">
                                    <WiDirectionUp className="red"/>
                                    <div className="productPrices">
                                        <span className="red">199</span>
                                    </div>
                                    <p className="productName text-uppercase text-whites">
                                        product name
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div>
                    <Col md="12" lg="12">
                        <Row className="m-0">
                            <Col>
                                <div className="productBox">
                                    <WiDirectionUp className="red"/>
                                    <div className="productPrices">
                                        <span className="red">199</span>
                                    </div>
                                    <p className="productName text-uppercase text-whites">
                                        product name
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div>
                    <Col md="12" lg="12">
                        <Row className="m-0">
                            <Col>
                                <div className="productBox">
                                    <WiDirectionUp className="red"/>
                                    <div className="productPrices">
                                        <span className="red">199</span>
                                    </div>
                                    <p className="productName text-uppercase text-whites">
                                        product name
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div>
                    <Col md="12" lg="12">
                        <Row className="m-0">
                            <Col>
                                <div className="productBox">
                                    <WiDirectionUp className="red"/>
                                    <div className="productPrices">
                                        <span className="red">199</span>
                                    </div>
                                    <p className="productName text-uppercase text-whites">
                                        product name
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </Slider>
        </div>
    );
};

export default ProductSlider;