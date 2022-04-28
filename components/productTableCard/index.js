import React from 'react';
import Table from './Table';
import Slider from "react-slick";

const ProductTable = ({ data, setCurrentCategory }) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: false,
        speed: 2500,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            const { subCategory = [] } = data[next] || {};
            const updatedCurrentCategory = { ...data[next] };
            if (subCategory?.length <= 6) {
                const subCategoryList = [];
                const limit = 6 - subCategory?.length;
                for (let index = 0; index < limit; index++) {
                    const targetIndex = index < subCategory.length ? index : 0;
                    if (subCategory[targetIndex]?.subCategoryId) {
                        subCategoryList.push(subCategory[targetIndex]);
                    }
                }
                updatedCurrentCategory.subCategory = [...subCategory, ...subCategoryList];
            }
            setCurrentCategory(updatedCurrentCategory);
        }
    };

    return (
        <div>
            <Slider {...settings}>
                {data?.map((item) => {
                    return (
                        <div key={item?.subCategoryId} className="borders bg-lightgrey my-5">
                            <div className="p-3 d-flex align-items-center tableHeader">
                                <div className="productImage">
                                    <img src={'/static/images/beer-bottle.png'}
                                        // {item?.categoryimageURL?.thumbnail.png}
                                        alt="bottle"
                                        className="w-100 p-3" />
                                </div>
                                <p className="text-whites font-lg mb-0 px-4 font-bolder text-uppercase text-whites ">
                                    {item?.categoryName}
                                </p>
                            </div>
                            <div className="p-3">
                                <Table subCategoryList={item?.subCategory} />
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default ProductTable;