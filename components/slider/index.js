import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import Slider from "react-slick";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";

const ProductSlider = ({ collectedData }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3500,
        arrows: false,
        // rtl: true,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 5,
        cssEase: 'linear',
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings} className="bg-grey py-2 slider">
                {collectedData?.map((item) => {
                    return (
                        <div key={item?.subCategoryId}>
                            <Col md="12" lg="12">
                                <Row className="m-0">
                                    <Col>
                                        <div className="productBox w-full">
                                            <div className="productName">
                                                <p className="m-0  text-uppercase text-whites">{item?.subCategoryName}</p>
                                            </div>
                                            <div className=" productPrices ">
                                                    <span className={`${item.socketUpdatedPrice ? "red" : "green"} flex align-items-center`}>
                                                    ₹ {item?.currentPrice}
                                                    </span>
                                                {item.socketUpdatedPrice ?
                                                    <HiArrowSmDown className="red font-xl" />
                                                    :
                                                    <HiArrowSmUp className="green font-xl" />
                                                }     
                                            </div>
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