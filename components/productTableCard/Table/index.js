import React from 'react';
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const Table = ({ subCategoryList=[] }) => {
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
                {subCategoryList.map((items) => {
                    return (
                        <tr className={items?.highPrice === items?.currentPrice ? "bg-green" : "bg-lightred"}>
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
                                <div className="d-flex align-items-center justify-content-center">
                                    {items.highPrice === items.currentPrice ?
                                        <div className="priceIcons">
                                            <HiArrowSmUp className="green font-xl" />
                                        </div>
                                        :
                                        <div className="priceIcons">
                                            <HiArrowSmDown className="red font-xl" />
                                        </div>}
                                    <p className="text-uppercase text-whites font-medium font-bold m-0 price">
                                        {items.currentPrice}
                                    </p>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default Table;