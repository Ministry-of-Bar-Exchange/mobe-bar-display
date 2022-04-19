import React from 'react';
import { Container } from 'reactstrap';
import Footer from '../../components/footer';
import ProductDetail from '../../components/productDetail';
import ProductTable from '../../components/productTableCard';
import ProductSlider from '../../components/slider';
const Home = () => {

    return (
        <Container fluid className="p-0 bg-darks">
            <div className="pb-4">
                <ProductSlider />
            </div>
            <div className="px-5 py-3 bg-lightgrey">
                <ProductDetail />
            </div>
            <div className="px-5 py-4 ">
                <ProductTable />
            </div>
            <div>
                <Footer/>
            </div>
        </Container>
    );
};

export default Home;