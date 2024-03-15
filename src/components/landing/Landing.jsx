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
        <div className="landing fixed flex items-center justify-center w-screen h-screen z-999 bg-zinc-900 text-center">
            <span className={`font-anton absolute text-9xl bg-food1 text-transparent bg-clip-text bg-fixed bg-center bg-cover transition-all duration-[2000ms] ${animate ? ' text-[200px]' : 'text-white'}`}>WAHAT AL ROMMAN</span>
        </div>
    );
};

export default Landing;
