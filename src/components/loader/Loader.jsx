import "./loader.css"
const Loader = () => {
    return (
        <div className="fixed loader flex top-0 left-0 w-screen h-screen z-999 bg-zinc-900">
            <div className="spinner m-auto"></div>
        </div>

    );
};

export default Loader;
