import React from 'react';
import { Col, Row } from 'reactstrap';
import ProductOffer from './components/Offers';
import ProductSavings from './components/savings';

const ProductDetail = () => {
    return (
        <div>
            <Col lg="12">
                <Row>
                    <Col md="6" lg="3">
                        <ProductOffer />
                    </Col>
                    <Col md="6" lg="3">
                        <ProductSavings />
                    </Col>
                    <Col md="6" lg="3">
                        <ProductOffer />
                    </Col>
                    <Col md="6" lg="3">
                        <ProductSavings />
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default ProductDetail;