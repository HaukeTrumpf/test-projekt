import React from 'react'
import InView from '../util/inView'
const MainContent = () => {
    return (
        <main className="container mx-auto p-4 flex h-screen">
            <div class="m-auto">
                <div className="grid md:grid-cols-3 gap-4">
                    <InView className="fade-in-left">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg animate-fade-left">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">test</div>
                                <p class="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem
                                    praesentium nihil.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2"></div>
                        </div>
                    </InView>
                    <InView className="fade-in-right">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg animate-fade-right">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">test</div>
                                <p class="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem
                                    praesentium nihil.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2"></div>
                        </div>
                    </InView>
                    <InView className="fade-in-left">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg animate-fade-left">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">test</div>
                                <p class="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem
                                    praesentium nihil.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2"></div>
                        </div>
                    </InView>
                </div>
            </div>
        </main>
    )
}

export default MainContent
