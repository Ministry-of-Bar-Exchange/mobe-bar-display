import React, { useEffect, useState } from 'react';
import Table from './Table';
import { productApi } from '../api/productApi';

const ProductTable = () => {
    const [data, setData] = useState()
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        productApi().then(e => setData(e?.data?.data?.getHomeData));
    }
    return (
        <div>
            {data?.map((item) => {
                return (
                    <div className="borders bg-lightgrey my-5">
                        <div className="p-3 d-flex align-items-center tableHeader">
                            <div className="productImage">
                                <img src={item.categoryimageURL.thumbnail} alt="bottle" className="w-100 p-3" />
                            </div>
                            <p className="text-whites font-lg mb-0 px-4 font-bolder text-uppercase text-whites ">
                                {item.categoryName}
                            </p>
                        </div>
                        <div className="p-3">
                            <Table />
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ProductTable;