
const Banner = () => {
    return (
        <div className="flex justify-between bg-slate-100 p-5 rounded-xl">
            <div className="w-3/4 space-y-5">
                <p className="text-6xl">Books to freshen up</p>
                <p className="text-6xl">your bookshelf</p>
                <button className="btn bg-[#23BE0A]">View The List</button>
            </div>
            <div className="flex justify-center items-center">
                <img src="https://i.ibb.co/yF7Wry9/banner-img.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;