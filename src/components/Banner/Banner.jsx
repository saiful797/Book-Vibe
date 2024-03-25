
const Banner = () => {
    return (
        <div className="flex justify-between bg-slate-100 p-16 rounded-xl mt-10 mb-16">
            <div className="w-3/4 space-y-10">
                <p className="text-4xl md:text-6xl font-medium">Books to freshen up</p>
                <p className="text-4xl md:text-6xl font-medium">your bookshelf</p>
                <button className="btn bg-[#23BE0A] text-white text-xl">View The List</button>
            </div>
            <div className="flex justify-center items-center">
                <img src="https://i.ibb.co/yF7Wry9/banner-img.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;