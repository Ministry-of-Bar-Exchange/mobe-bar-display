import React from 'react';
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import Slider from "react-slick";

const Table = ({ subCategoryList = [], allData, setCategoryName }) => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3500,
        arrows: false,
        cssEase: 'linear',
        verticalSwiping: true,
        pauseOnHover: false,
        beforeChange: (current, next) => {
            const { subCategory = [] } = allData[current] || {};
            if (subCategory?.length < 3) return null;
            let toSkip = 2;
            const nextItem = subCategoryList[next + toSkip];
            for (let index = 0; index < allData.length; index++) {
                const category = allData[index];
                const isSubCategoryAvailable = category.subCategory.find(subCategory => subCategory.subCategoryId === nextItem.subCategoryId);
                if (isSubCategoryAvailable) {
                    setCategoryName(category.categoryName);
                }
            }
        }
    }
    return (
        <div className="table m-0">
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
                            <div key={items?.subCategoryId} className={`${items.socketUpdatedPrice ? "bg-transparentGray" : "bg-transparentGray"} d-flex tabledata align-items-center`}>
                                <div className="text-uppercase text-whites font-medium font-sm tableBody">
                                    <p>{items?.subCategoryName}</p>
                                </div>
                                <div className="text-uppercase text-whites font-medium font-sm d-flex flex-column justify-content-center text-center borderTabledata tableBody">
                                    <BsChevronUp className="green font-md w-100" />
                                    ₹ {items?.highPrice}
                                </div>
                                <div className="text-uppercase text-whites font-medium font-sm d-flex flex-column justify-content-center text-center tableBody">
                                    <BsChevronDown className="red font-md w-100" />
                                    ₹ {items?.lowPrice}
                                </div>
                                <div className={`${items.socketUpdatedPrice ? "bg-darkred" : "bg-darkgreen"} d-flex justify-content-center tableBody`}>
                                    <div className="d-flex align-items-center justify-content-center">
                                        {items.socketUpdatedPrice ?
                                            <div className="priceIcons">
                                                <HiArrowSmDown className="red font-xl" />
                                            </div>
                                            :
                                            <div className="priceIcons">
                                                <HiArrowSmUp className="green font-xl" />
                                            </div>
                                        }
                                        <p className="text-uppercase text-whites font-medium font-sm m-0 price">
                                            ₹ {items?.currentPrice}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
};
export default Table;
