import React from 'react';
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { WiDirectionDown, WiDirectionUp } from 'react-icons/wi';

const Table = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colspan="2" className="text-uppercase text-whites font-medium font-bold" >name</th>
                    <th className="text-uppercase text-whites font-medium font-bold">high</th>
                    <th className="text-uppercase text-whites font-medium font-bold">low</th>
                    <th className="text-uppercase text-whites font-medium font-bold">price</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-green">
                    <td colspan="2" className="text-uppercase text-whites font-medium font-bold" >
                        cosmopolitian
                    </td>
                    <td>
                        <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center borderTabledata">
                            <AiOutlineUp className="green font-md w-100" />
                            250
                        </div>
                    </td>
                    <td>
                        <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center">
                            <AiOutlineDown className="red font-md w-100" />
                            190
                        </div>
                    </td>
                    <td className="bg-darkgreen">
                        <div className="d-flex align-items-center justify-content-center">
                            <WiDirectionUp className="green font-xl" />
                            <p className="text-uppercase text-whites font-medium font-bold m-0">
                                250
                            </p>
                        </div>
                    </td>
                </tr>
                <tr className="bg-lightred">
                    <td colspan="2" className="text-uppercase text-whites font-medium font-bold" >
                        cosmopolitian
                    </td>
                    <td>
                        <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center borderTabledata">
                            <AiOutlineUp className="green font-md w-100" />
                            250
                        </div>
                    </td>
                    <td>
                        <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center">
                            <AiOutlineDown className="red font-md w-100" />
                            190
                        </div>
                    </td>
                    <td className="bg-darkred">
                        <div className="d-flex align-items-center justify-content-center">
                            <WiDirectionDown className="red font-xlg" />
                            <p className="text-uppercase text-whites font-medium font-bold m-0">
                                250
                            </p>
                        </div>
                    </td>
                </tr>
                <tr className="bg-green">
                    <td colspan="2" className="text-uppercase text-whites font-medium font-bold" >
                        cosmopolitian
                    </td>
                    <td>
                        <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center borderTabledata">
                            <AiOutlineUp className="green font-md w-100" />
                            250
                        </div>
                    </td>
                    <td>
                        <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center">
                            <AiOutlineDown className="red font-md w-100" />
                            190
                        </div>
                    </td>
                    <td className="bg-darkgreen">
                        <div className="d-flex align-items-center justify-content-center">
                            <WiDirectionUp className="green font-xl" />
                            <p className="text-uppercase text-whites font-medium font-bold m-0">
                                250
                            </p>
                        </div>
                    </td>
                </tr>
                <tr className="bg-green">
                    <td colspan="2" className="text-uppercase text-whites font-medium font-bold" >
                        cosmopolitian
                    </td>
                    <td>
                        <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center borderTabledata">
                            <AiOutlineUp className="green font-md w-100" />
                            250
                        </div>
                    </td>
                    <td>
                        <div className="text-uppercase text-whites font-medium font-bold d-flex flex-column justify-content-center text-center">
                            <AiOutlineDown className="red font-md w-100" />
                            190
                        </div>
                    </td>
                    <td className="bg-darkgreen">
                        <div className="d-flex align-items-center justify-content-center">
                            <WiDirectionUp className="green font-xl" />
                            <p className="text-uppercase text-whites font-medium font-bold m-0">
                                250
                            </p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;