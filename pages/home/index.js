import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'reactstrap';
import Footer from '../../components/footer';
// import ProductDetail from '../../components/productDetail';
import ProductTable from '../../components/productTableCard';
import ProductSlider from '../../components/slider';
import { productApi } from '../../pages/api/productApi';
import { SocketApi } from "../api/socket";

const Home = () => {
    const [dataItems, setDataItems] = useState([]);
    const [subCategoryItems, setSubCategoryItems] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        getProducts();
        socketHandler();
    }, [])

    useEffect(() => {
        const combineSubCategory = [...subCategoryItems];
        dataItems.forEach(element => {
            combineSubCategory.push(...element.subCategory);
        });
        setSubCategoryItems(combineSubCategory);
    }, [dataItems])
    const getProducts = async () => {
        productApi().then(e => {
            setCategoryName(e?.data?.data?.getHomeData?.[0]?.categoryName)
            setDataItems(e?.data?.data?.getHomeData)
        })
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


    const replaceData = (updatedSubCategoryData) => {
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
                CategoryList?.splice(i, 1, category);
                setDataItems(CategoryList);
                break;
            }
        }
    }
    return (
        <Container fluid className="p-0 bg-darks full-height d-flex flex-column">
            <div className="pb-4">
                <ProductSlider collectedData={subCategoryItems} />
            </div>
            {/* <div className="px-5 py-3 bg-lightgrey">
                <ProductDetail />
            </div> */}
            <div className={`px-5 dataContainer ${dataItems.length > 0 ? '' : 'spinnerContainer'}`}>
                {dataItems.length > 0 ?
                    <ProductTable
                        setCategoryName={setCategoryName}
                        dataItems={dataItems}
                        categoryName={categoryName}
                        collectedSubCategory={subCategoryItems}
                    />
                    :
                    <Spinner animation="border" variant="primary" className="text-white" />
                }
            </div>
            <div>
                <Footer />
            </div>
        </Container>
    );
};

export default Home;