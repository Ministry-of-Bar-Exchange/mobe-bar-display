import React from 'react';
import { HiCurrencyRupee } from "react-icons/hi";
import { FaHandHolding } from "react-icons/fa";

const ProductSavings = () => {
    return (
        <div className="py-4 px-5 bg-darkgrey h-100">
            <p className="productTitle text-uppercase text-whites text-center">
                product name
            </p>
            <div className="d-flex align-items-center justify-content-center">
                <div className="saveWrapper">
                    <div className="d-flex align-items-center py-2 border-2 border-transparent">
                        <p className="font-lg font-bolder font-bold text-gray text-uppercase mb-0 d-flex flex-column saveText" >
                            Save
                            <span className="font-bolder font-bold text-blue text-uppercase uptoText">
                                upto
                            </span>
                        </p>
                        <div className="font-lg font-bolder font-bold text-gray text-uppercase mb-0 d-flex flex-column align-items-end pt-1 handIconWrapper">
                            <HiCurrencyRupee />
                            <FaHandHolding className="handIcon font-xl" />
                        </div>
                        <p className="font-lg font-bolder font-bold offwhite text-uppercase m-0 rotateText">
                            40
                        </p>
                    </div>
                    <div className="d-flex justify-content-end align-items-center pt-3">
                        <p className="pr-2 text-gray font-lg font-bolder m-0 lineThick px-3">
                            250
                        </p>
                        <p className="m-0 font-bold green font-lg font-bolder px-3">
                            210
                        </p>
                    </div>
                </div>
                <div className="drinkBottle">
                    <img src='/static/images/beer-bottle.png' alt="bottle" className="w-100" />
                </div>
            </div>
        </div>

    );
};

export default ProductSavings;