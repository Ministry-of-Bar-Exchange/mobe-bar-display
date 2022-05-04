import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Footer from '../../components/footer';
import ProductDetail from '../../components/productDetail';
import ProductTable from '../../components/productTableCard';
import ProductSlider from '../../components/slider';
import { productApi } from '../../pages/api/productApi';
import { SocketApi } from "../api/socket";

const Home = () => {
    const [data, setData] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);

    useEffect(() => {
        getProducts();
        socketHandler();
    }, [])

    useEffect(() => {
        if (!currentCategory) {
            setCurrentCategory(data[0]);
        }
    }, [data])
    const getProducts = async () => {
        productApi().then(e => setData(e?.data?.data?.getHomeData));
    }
    const socketHandler = () => {
        const socketData = SocketApi();
        socketData.on('connect', () => console.debug('socket connected'))
        socketData.on('messageFromServer', data => {
            console.log('message from server data', data);
        });
        socketData.on('priceVariation', data => {
            console.log('priceVariation data', data);
        });
        return socketData;
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
                <ProductTable data={data} setCurrentCategory={setCurrentCategory} />
            </div>
            <div>
                <Footer />
            </div>
        </Container>
    );
};

export default Home;