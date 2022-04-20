import React from 'react';
import { Col, Row } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
const ProductSlider = () => {
    const sliderdetail = [
        {
            price: "99",
            productname: "product name",
            priceAction: 'increased'
        },
        {
            price: "99",
            productname: "product name",
        },
        {
            price: "99",
            productname: "product name",
            priceAction: 'increased'
        },
        {
            price: "99",
            productname: "product name",
        },
        {
            price: "99",
            productname: "product name",
            priceAction: 'increased'
        },
        {
            price: "99",
            productname: "product name",
        },
        {
            price: "99",
            productname: "product name",
            priceAction: 'increased'
        },
        {
            price: "99",
            productname: "product name",
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 3500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 6,
        cssEase: 'linear',
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings} className="bg-grey pt-3 pb-2 slider">
                {sliderdetail?.map((item) => {
                    return (
                        <div>
                            <Col md="12" lg="12">
                                <Row className="m-0">
                                    <Col>
                                        <div className="productBox">
                                            {item.priceAction === "increased" ?
                                                <HiArrowSmUp className="green font-xl" />
                                                :
                                                <HiArrowSmDown className="red font-xl" />
                                            }
                                            <div className="productPrices">
                                                <span className={item.priceAction === "increased" ? "green" : "red"}>
                                                    {item.price}
                                                </span>
                                            </div>
                                            <p className="productName text-uppercase text-whites">
                                                {item.productname}
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