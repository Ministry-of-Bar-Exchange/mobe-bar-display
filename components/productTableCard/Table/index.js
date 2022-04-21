import React, { useEffect, useState } from 'react';
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { productApi } from '../../api/productApi';

const Table = () => {
    const [data, setData] = useState()

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        productApi().then(e => setData(e?.data?.data?.getHomeData));
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colspan="2" className="text-uppercase text-whites font-medium font-bolder" >name</th>
                    <th className="text-uppercase text-whites font-medium font-bolder">high</th>
                    <th className="text-uppercase text-whites font-medium font-bolder">low</th>
                    <th className="text-uppercase text-whites font-medium font-bolder">price</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => {
                    return (
                        <>
                            {item?.subCategory.map((items) => {
                                return (
                                    <tr className={item.highPrice === item.currentPrice ? "bg-lightred" : "bg-green"}>
                                        <td colspan="2" className="text-uppercase text-whites font-medium font-bold" >
                                            {items.subCategoryName}
                                        </td>
                                        <td>
                                            <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center borderTabledata">
                                                <BsChevronUp className="green font-md w-100" />
                                                {items.highPrice}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center">
                                                <BsChevronDown className="red font-md w-100" />
                                                {items.lowPrice}
                                            </div>
                                        </td>
                                        <td className={items.highPrice === items.currentPrice ? "bg-darkgreen" : "bg-darkred"}>
                                            <div className="d-flex align-itemss-center justify-content-center">
                                                {items.highPrice === items.currentPrice ?
                                                    <div className="priceIcons">
                                                        <HiArrowSmUp className="green font-xl" />
                                                    </div>
                                                    :
                                                    <div className="priceIcons">
                                                        <HiArrowSmDown className="red font-xl" />
                                                    </div>}
                                                <p className="text-uppercase text-whites font-medium font-bold m-0">
                                                    {items.currentPrice}
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </>
                    )
                })}
            </tbody>
        </table>
    );
};

export default Table;