import React from 'react';

const Home = () => {
    return (
        <div>
            <div
                className="relative flex flex-col border-gray-200 border-t lg:flex-row"
            >
                <div
                    className="px-10 pb-16 pt-10 w-full order-2 md:py-32 lg:w-1/2 lg:order-1"
                >
                    <h1 className="font-extrabold text-gray-900 text-5xl">
                        <span>Une Nouvelle manière d'investir</span>
                    </h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi dolore doloribus facilis id inventore ipsam itaque labore nemo non odio, pariatur quasi rerum sunt tenetur veritatis vero? Eos, fugiat.</p>

                </div>

                <div
                    className="h-96 z-0 w-full relative overflow-hidden order-1 lg:static md:w-1/2 lg:order-2"
                >
                    {/*<Image
                        alt=""
                        layout="responsive"
                        width={300}
                        height={380}
                        objectFit="cover"
                        quality={100}
                    />*/}
                </div>
            </div>

        </div>
    );
};

export default Home;