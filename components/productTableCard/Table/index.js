import React from 'react';
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import Slider from "react-slick";

const Table = ({ subCategoryList = [] }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        speed: 1500,
        arrows: false,
        cssEase: 'linear',
        verticalSwiping: true,
    }
    return (
        <div className="table">
            <div className="d-flex tbHeading">
                <h6 className="text-uppercase text-whites font-medium font-bolder">name</h6>
                <h6 className="text-uppercase text-whites font-medium font-bolder">high</h6>
                <h6 className="text-uppercase text-whites font-medium font-bolder">low</h6>
                <h6 className="text-uppercase text-whites font-medium font-bolder">price</h6>
            </div>
            <div>
                <Slider {...settings} >
                {subCategoryList.map((items) => {
                    return (
                        <div className={`${items?.highPrice === items?.currentPrice ? "bg-green" : "bg-lightred"} d-flex tabledata align-items-center`}>
                            <div className="text-uppercase text-whites font-medium font-bold tableBody">
                                <p>{items.subCategoryName}</p>
                            </div>
                            <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center borderTabledata tableBody">
                                <BsChevronUp className="green font-md w-100" />
                                {items.highPrice}
                            </div>
                            <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center tableBody">
                                <BsChevronDown className="red font-md w-100" />
                                {items.lowPrice}
                            </div>
                            <div className={`${items.highPrice === items.currentPrice ? "bg-darkgreen" : "bg-darkred"} d-flex justify-content-center tableBody `}>
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
                            </div>
                        </div>
                    )
                })}
                </Slider>
            </div>
        </div>

        //  <table className="table">
        //         <thead>
        //             <t       <th colspan="2" className="text-uppercase text-whites font-medium font-bolder" >name</th>
        //             <th className="text-uppercase text-whites font-medium font-bolder">high</th>
        //             <th className="text-uppercase text-whites font-medium font-bolder">low</th>
        //             <th className="text-uppercase text-whites font-medium font-bolder">price</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <Slider {...settings} >
        //             {subCategoryList.map((items) => {
        //                 return (
        //                     <tr className={items?.highPrice === items?.currentPrice ? "bg-green" : "bg-lightred"}>
        //                         <td colspan="2" className="text-uppercase text-whites font-medium font-bold">
        //                             {items.subCategoryName}
        //                         </td>
        //                         <td>
        //                             <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center borderTabledata">
        //                                 <BsChevronUp className="green font-md w-100" />
        //                                 {items.highPrice}
        //                             </div>
        //                         </td>
        //                         <td>
        //                             <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center">
        //                                 <BsChevronDown className="red font-md w-100" />
        //                                 {items.lowPrice}
        //                             </div>
        //                         </td>
        //                         <td className={items.highPrice === items.currentPrice ? "bg-darkgreen" : "bg-darkred"}>
        //                             <div className="d-flex align-items-center justify-content-center">
        //                                 {items.highPrice === items.currentPrice ?
        //                                     <div className="priceIcons">
        //                                         <HiArrowSmUp className="green font-xl" />
        //                                     </div>
        //                                     :
        //                                     <div className="priceIcons">
        //                                         <HiArrowSmDown className="red font-xl" />
        //                                     </div>}
        //                                 <p className="text-uppercase text-whites font-medium font-bold m-0 price">
        //                                     {items.currentPrice}
        //                                 </p>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 )
        //             })}
        //         </Slider>
        //     </tbody>
        // </table > 
    );
};
export default Table;
