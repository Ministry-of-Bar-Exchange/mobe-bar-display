import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Footer from '../../components/footer';
import ProductDetail from '../../components/productDetail';
import ProductTable from '../../components/productTableCard';
import ProductSlider from '../../components/slider';
import { productApi } from '../../pages/api/productApi';

const Home = () => {
    const [data, setData] = useState([]);
    const [currentCategory , setCurrentCategory] = useState(null);

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        if(!currentCategory){
            setCurrentCategory(data[0]);
        }     
    }, [data]) 
    const getProducts = async () => {
        productApi().then(e => setData(e?.data?.data?.getHomeData));
    }
    return (
        <Container fluid className="p-0 bg-darks">
            <div className="pb-4">
                <ProductSlider collectedData={currentCategory?.subCategory} />
            </div>
            <div className="px-5 py-3 bg-lightgrey">
                <ProductDetail />
            </div>
            <div className="px-5 py-4">
                <ProductTable data={data}/>
            </div>
            <div>
                <Footer />
            </div>
        </Container>
    );
};

export default Home;