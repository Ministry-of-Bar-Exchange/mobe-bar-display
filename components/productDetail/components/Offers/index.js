import React from 'react';

const ProductOffer = () => {
    return (
        <div className="py-4 px-5 bg-darkgrey h-100">
            <p className="productTitle text-uppercase text-whites">
                product name
            </p>
            <div className="d-flex justify-content-center align-items-center px-3 py-2 priceBox">
                <p className="text-orange priceOff pr-2">25</p>
                <p className="text-uppercase offwhite mb-0 font-bold font-md  d-flex flex-column">
                    %
                    <span className="offText">off</span>
                </p>
            </div>
            <div className="d-flex justify-content-center align-items-center pt-3">
                <p className="pr-2 text-gray font-lg font-bolder m-0 lineThick px-3">
                    250
                </p>
                <p className="m-0 font-bold green font-lg font-bolder px-3">
                    210
                </p>
            </div>
        </div>

    );
};

export default ProductOffer;