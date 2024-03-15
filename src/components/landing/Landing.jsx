import { useEffect, useState } from "react";

const Landing = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        console.log("trig");
        window.addEventListener("load", () => {
            console.log("trig2");
            setAnimate(true);
        });
    }, []);
    console.log(animate);

    return (
        <div className="landing fixed flex items-center justify-center w-screen h-screen z-999 bg-zinc-900 text-center">
            <span className={`font-anton text-9xl bg-food1 bg-clip-text bg-fixed bg-center bg-cover transition-all duration-[2000ms] ${animate ? 'text-transparent text-[200px]' : 'text-white'}`}>WAHAT AL ROMMAN</span>
        </div>
    );
};

export default Landing;
