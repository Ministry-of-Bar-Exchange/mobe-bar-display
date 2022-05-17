import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Footer from '../../components/footer';
import ProductDetail from '../../components/productDetail';
import ProductTable from '../../components/productTableCard';
import ProductSlider from '../../components/slider';
import { productApi } from '../../pages/api/productApi';
import { SocketApi } from "../api/socket";

const Home = () => {
    const [dataItems, setDataItems] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);

    useEffect(() => {
        getProducts();
        socketHandler();
    }, [])

    useEffect(() => {
        if (!currentCategory) {
            setCurrentCategory(dataItems[0]);
            replaceData();
        }
    }, [dataItems])
    const getProducts = async () => {
        productApi().then(e => setDataItems(e?.data?.data?.getHomeData));
    }
    const socketHandler = () => {
        const socketData = SocketApi();
        socketData.on('messageFromServer', data => {
            console.log('message from server data', data);
        });
        socketData.on('priceVariation', newSubCategory => {
            replaceData(newSubCategory);
            console.log('priceVariation data', newSubCategory);
        });
        return socketData;
    }
    const socketItem = {
        basePrice: 1198,
        branchId: "57d10fb2aa535cec381b23ab",
        category: "586fae33392aa69055507ddd",
        currentPrice: 1198,
        currentStock: 20,
        highPrice: 1222,
        lowPrice: 599,
        priceIncrease: 1,
        stockDate: "2021-12-18T11:40:36.963Z",
        stockId: "61bdc8b49038ff001733f863",
        subCategory: "58ad3854c91a5a141789cc18",
        toggle: 24,
        socketUpdatedPrice: true
    }
    const replaceData = (updatedSubCategoryData = socketItem) => {
        const CategoryList = [...dataItems];
        const updatedSocketData = { ...updatedSubCategoryData }
        for (let i = 0; i < CategoryList?.length; i++) {
            const category = CategoryList[i];
            const dataDetail = category?.subCategory.find(item => item.subCategoryId == updatedSocketData?.subCategory);
            const findIndex = category?.subCategory.indexOf(dataDetail);
            if (dataDetail?.highPrice < updatedSocketData?.highPrice) {
                updatedSocketData.socketUpdatedPrice = true;
            }
            if (dataDetail?.currentPrice < updatedSocketData?.currentPrice) {
                updatedSocketData.socketUpdatedPrice = true;
            }
            if (findIndex > -1) {
                category?.subCategory.splice(findIndex, 1, updatedSocketData);
                CategoryList?.splice( i , 1, category);
                setDataItems(CategoryList);
                break;
            }
        }
    }
    return (
        <Container fluid className="p-0 bg-darks full-height">
            <div className="pb-4">
                <ProductSlider collectedData={currentCategory?.subCategory} />
            </div>
            {/* <div className="px-5 py-3 bg-lightgrey">
                <ProductDetail />
            </div> */}
            <div className="px-5 pb-4">
                <ProductTable dataItems={dataItems} setCurrentCategory={setCurrentCategory} />
            </div>
            <div>
                <Footer />
            </div>
        </Container>
    );
};

export default Home;