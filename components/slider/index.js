import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { productApi } from '../../pages/api/productApi';

const ProductSlider = () => {
    const [data, setData] = useState()
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
    let collectedData = []
    const allData = data?.map(i => i.subCategory.map(item => collectedData.push(item)))

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        productApi().then(e => setData(e?.data?.data?.getHomeData));
    }

    return (
        <div>
            <Slider {...settings} className="bg-grey pt-3 pb-2 slider">
                {collectedData?.map((item) => {
                    return (
                        <div>
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