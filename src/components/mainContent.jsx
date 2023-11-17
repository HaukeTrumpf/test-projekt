import React from 'react'
import InView from '../util/inView'
const MainContent = () => {
    return (
        <main className=" p-4 flex h-screen bg-white">
            <div className="m-auto container ">
                <div className="flex gap-16 justify-between flex-wrap">
                    <InView className="fade-in-left">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 text-white hover:scale-125 transition duration-500 cursor-pointer">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">test</div>
                                <p className="text-gray-700 text-base text-white">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem
                                    praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2"></div>
                        </div>
                    </InView>
                    <InView className="fade-in-left">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 text-white hover:scale-125 transition duration-500 cursor-pointer">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">test</div>
                                <p className="text-gray-700 text-base text-white">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem
                                    praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2"></div>
                        </div>
                    </InView>
                    <InView className="fade-in-left">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 text-white hover:scale-125 transition duration-500 cursor-pointer">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">test</div>
                                <p className="text-gray-700 text-base text-white ">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem
                                    praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2"></div>
                        </div>
                    </InView>
                </div>
            </div>
        </main>
    )
}

export default MainContent
