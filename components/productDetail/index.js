import React from 'react';
import { Col, Row } from 'reactstrap';
import { HiCurrencyRupee } from "react-icons/hi";
import { FaHandHolding } from "react-icons/fa";

const ProductDetail = () => {
    return (
        <div>
            <Col lg="12">
                <Row>
                    <Col lg="3">
                        <div className="py-4 px-5 bg-darkgrey">
                            <p className="productTitle text-uppercase text-whites">
                                product name
                            </p>
                            <div className="d-flex justify-content-center align-items-center px-3 py-2 priceBox">
                                <p className="text-orange priceOff pr-2">25</p>
                                <p className="text-uppercase offwhite mb-0 font-bold font-md  d-flex flex-column">
                                    %
                                    <span className="offText">off</span>
                                </p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center pt-3">
                                <p className="pr-2 text-gray font-lg font-bolder m-0 text-decoration-line-through lineThick px-3">
                                    250
                                </p>
                                <p className="m-0 font-bold green font-lg font-bolder px-3">
                                    210
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="py-4 px-5 bg-darkgrey">
                            <p className="productTitle text-uppercase text-whites">
                                product name
                            </p>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="saveWrapper">
                                    <div className="d-flex align-items-center py-2">
                                        <p className="font-lg font-bolder font-bold text-gray text-uppercase mb-0 d-flex flex-column saveText" >
                                            Save
                                            <span className="font-bolder font-bold text-blue text-uppercase uptoText">
                                                upto
                                            </span>
                                        </p>
                                        <div className="font-lg font-bolder font-bold text-gray text-uppercase mb-0 d-flex flex-column align-items-end pt-3 handIconWrapper">
                                            <HiCurrencyRupee />
                                            <FaHandHolding className="handIcon font-xl" />
                                        </div>
                                        <p className="font-lg font-bolder font-bold offwhite text-uppercase m-0 rotateText">
                                            40
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-end align-items-center pt-3">
                                        <p className="pr-2 text-gray font-lg font-bolder m-0 text-decoration-line-through lineThick px-3">
                                            250
                                        </p>
                                        <p className="m-0 font-bold green font-lg font-bolder px-3">
                                            210
                                        </p>
                                    </div>
                                </div>
                                <div className="drinkBottle">
                                    <img src='/static/images/beer-bottle.png' alt="bottle" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="py-4 px-5 bg-darkgrey">
                            <p className="productTitle text-uppercase text-whites">
                                product name
                            </p>
                            <div className="d-flex justify-content-center align-items-center px-3 py-2 priceBox">
                                <p className="text-orange priceOff pr-2">25</p>
                                <p className="text-uppercase offwhite mb-0 font-bold font-md  d-flex flex-column">
                                    %
                                    <span className="offText">off</span>
                                </p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center pt-3">
                                <p className="pr-2 text-gray font-lg font-bolder m-0 text-decoration-line-through lineThick px-3">
                                    250
                                </p>
                                <p className="m-0 font-bold green font-lg font-bolder px-3">
                                    210
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="py-4 px-5 bg-darkgrey">
                            <p className="productTitle text-uppercase text-whites">
                                product name
                            </p>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="saveWrapper">
                                    <div className="d-flex align-items-center py-2">
                                        <p className="font-lg font-bolder font-bold text-gray text-uppercase mb-0 d-flex flex-column saveText" >
                                            Save
                                            <span className="font-bolder font-bold text-blue text-uppercase uptoText">
                                                upto
                                            </span>
                                        </p>
                                        <div className="font-lg font-bolder font-bold text-gray text-uppercase mb-0 d-flex flex-column align-items-end pt-3 handIconWrapper">
                                            <HiCurrencyRupee />
                                            <FaHandHolding className="handIcon font-xl" />
                                        </div>
                                        <p className="font-lg font-bolder font-bold offwhite text-uppercase m-0 rotateText">
                                            40
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-end align-items-center pt-3">
                                        <p className="pr-2 text-gray font-lg font-bolder m-0 text-decoration-line-through lineThick px-3">
                                            250
                                        </p>
                                        <p className="m-0 font-bold green font-lg font-bolder px-3">
                                            210
                                        </p>
                                    </div>
                                </div>
                                <div className="drinkBottle"> 
                                    <img src='/static/images/beer-bottle.png' alt="bottle" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default ProductDetail;