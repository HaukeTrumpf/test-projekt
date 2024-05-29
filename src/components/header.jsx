import { SocialIcon } from 'react-social-icons'


import InView from '../util/inView';
const Header = () => {

    return (
        <>
        <InView className="flex flex-col justify-between items-center h-[100dvh] p-5 md:p-20">
        <div className="flex flex-col items-center justify-center h-screen">
                <div className="text-[#2568fb] flex flex-col items-center">
                    <h1 className="text-6xl md:text-9xl mb-10 tracking-widest">
                    <span className='text-[#fecd45] text-6xl md:text-9xl'>☻</span>
                        Hi,
                    </h1>
                    <span>ich bin Haui und mach Internet. Wenn du willst, dass ich dir deins mache, melde dich gern</span>
                    <a href="#contact">
                        <button className="mt-20 flex items-center gap-4">
                            Schreib mir! <div className='arrow bounce'>↓</div>
                        </button>
                    </a>
                </div>
            </div>

            <div className='flex flex-col items-center'>
            <div className='flex justify-center items-center gap-4'>
                <SocialIcon url="https://instagram.com" fgColor='#2568fb' bgColor="#fff"/>
                <SocialIcon url="https://facebook.com" fgColor='#2568fb' bgColor="#fff"/>
            </div>
           
        </div>
        <span className='text-[#2568fb] mt-4'>
                <a className='link' href="lebenslauf_hauke_trumpf.pdf" download="cv_haukeTrumpf">Download CV</a>
        </span>
        </InView>
     
        </>
    )
}

export default Header
