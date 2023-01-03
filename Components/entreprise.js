import React from 'react';
import Image from "next/image";

const Entreprise = () => {
    return (
        <div id="how">
            <div className="py-12 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="mt-2 text-5xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            L'entreprise
                        </h2>
                        <div
                            className="relative flex flex-col border-gray-200 lg:flex-row"
                        >
                            <div
                                className="p-5 w-full order-2 md:py-16 lg:w-1/2 lg:order-1"
                            >
                                <h3 className="font-extrabold text-gray-900 text-3xl">
                                    <span>Pourquoi TTM?</span>
                                </h3>
                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi dolore doloribus facilis id inventore ipsam itaque labore nemo non odio, pariatur quasi rerum sunt tenetur veritatis vero? Eos, fugiat.</p>

                            </div>

                            <div
                                className="p-5 w-full order-2 md:py-16 lg:w-1/2 lg:order-1"
                            >
                                <h3 className="font-extrabold text-gray-900 text-3xl">
                                    <span>La DAPP</span>
                                </h3>
                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi dolore doloribus facilis id inventore ipsam itaque labore nemo non odio, pariatur quasi rerum sunt tenetur veritatis vero? Eos, fugiat.</p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Entreprise;