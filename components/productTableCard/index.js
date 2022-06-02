import React from 'react';
import Table from './Table';

const ProductTable = ({
    dataItems,
    collectedSubCategory,
    categoryName,
    setCategoryName
}) => {

    return (
        <div>
            <div className="borders bg-lightgrey mb-2">
                <div className="p-2 d-flex align-items-center tableHeader">
                    <div className="productImage">
                        <img src={'/static/images/beer-bottle.png'}
                            // {item?.categoryimageURL?.thumbnail.png}
                            alt="bottle"
                            className="w-100 p-2" />
                    </div>
                    <p className="text-whites font-lg mb-0 px-4 font-bolder text-uppercase text-whites ">
                        {categoryName}
                    </p>
                </div>
                <div className="p-3">
                    <Table
                        allData={dataItems}
                        subCategoryList={collectedSubCategory}
                        setCategoryName={setCategoryName} />
                </div>
            </div>
        </div>
    );
};

export default ProductTable;