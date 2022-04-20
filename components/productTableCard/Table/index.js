import React from 'react';
import { HiArrowSmDown, HiArrowSmUp} from 'react-icons/hi';
import { BsChevronUp ,BsChevronDown } from 'react-icons/bs';

const Table = () => {
    const table = [
        {
            name: "cosmopolitian",
            high: "250",
            low: "190",
            price: "250",
            priceAction: 'increased'
        },
        {
            name: "mojito",
            high: "250",
            low: "190",
            price: "190",
            priceAction: 'decreased'

        },
        {
            name: "Rum",
            high: "250",
            low: "190",
            price: "250",
            priceAction: 'increased'
        },
        {
            name: "cosmopolitian",
            high: "250",
            low: "190",
            price: "250",
            priceAction: 'increased'
        }
    ]
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
                {table?.map((item) => {
                    return (
                        <tr className={item.priceAction === "increased" ? "bg-green" : "bg-lightred"}>
                            <td colspan="2" className="text-uppercase text-whites font-medium font-bold" >
                                {item.name}
                            </td>
                            <td>
                                <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center borderTabledata">
                                    <BsChevronUp className="green font-md w-100" />
                                    {item.high}
                                </div>
                            </td>
                            <td>
                                <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center">
                                    <BsChevronDown  className="red font-md w-100" />
                                    {item.low}
                                </div>
                            </td>
                            <td className={item.priceAction === "increased" ? "bg-darkgreen" : "bg-darkred"}>
                                <div className="d-flex align-items-center justify-content-center">
                                    {item.priceAction === "increased" ?
                                         <div className="priceIcons"> 
                                            <HiArrowSmUp className="green font-xl" />
                                        </div>
                                        :
                                         <div className="priceIcons"> 
                                            <HiArrowSmDown className="red font-xl" />
                                        </div>}
                                    <p className="text-uppercase text-whites font-medium font-bold m-0">
                                        {item.price}
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