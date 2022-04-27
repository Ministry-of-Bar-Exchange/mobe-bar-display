import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import Slider from "react-slick";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";

const ProductSlider = ({ collectedData }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 3500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 5,
        cssEase: 'linear',
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings} className="bg-grey pt-3 pb-2 slider">
                {collectedData?.map((item) => {
                    return (
                        <div key={item?.subCategoryId}>
                            <Col md="12" lg="12">
                                <Row className="m-0">
                                    <Col>
                                        <div className="productBox">
                                            {item.highPrice < item.currentPrice ?
                                                <HiArrowSmDown className="red font-xl" />
                                                :
                                                <HiArrowSmUp className="green font-xl" />
                                            }
                                            <div className="productPrices">
                                                <span className={item.highPrice < item.currentPrice ? "red" : "green"}>
                                                    {item.currentPrice}
                                                </span>
                                            </div>
                                            <p className="productName text-uppercase text-whites">
                                                {item.subCategoryName}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default ProductSlider;