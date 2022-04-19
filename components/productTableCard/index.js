import React from 'react';
import Table from './Table';

const ProductTable = () => {
    return (
        <div className="borders bg-lightgrey my-5">
            <div className="p-3 d-flex align-items-center tableHeader">
                <div className="productImage">
                    <img src='/static/images/beer-bottle.png' alt="bottle" className="w-100 p-3" />
                </div>
                <p className="text-whites font-lg mb-0 px-4 font-bold text-uppercase text-whites ">
                    cocktails
                </p>
            </div>
            <div className="p-3">
                <Table/>
            </div>
        </div>
    );
};

export default ProductTable;