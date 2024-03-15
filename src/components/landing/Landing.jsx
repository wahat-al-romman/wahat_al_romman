import { useEffect, useState } from "react";

const Landing = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {

        const handleLoad = () => {
            setAnimate(true);
        };
        const timeoutId = setTimeout(() => {
            handleLoad()
          }, 2000);
        document.addEventListener('load', handleLoad);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('load', handleLoad);
        };
    }, []);
    console.log(animate);

    return (
        <div className={`landing fixed flex items-center justify-center z-999 w-screen h-screen bg-zinc-900 text-center bg-center ${animate ? 'animate-disappear':''}`}>
            <span className={`font-anton absolute md:whitespace-nowrap text-9xl max-md:scale-50 bg-food1 text-transparent bg-clip-text bg-fixed bg-center bg-cover ${animate ? 'max-md:animate-trans md:animate-sizeup' : ''}`}>WAHAT AL ROMMAN</span>
        </div>
    );
};

export default Landing;
