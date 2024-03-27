import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blogs.json')
          .then(res => res.json())
          .then(data => setBlogs(data))
    },[])
    return (
        <div className="mt-10">
            <div>
                <div role="tablist" className="tabs tabs-lifted tabs-lg">
                <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold" aria-label="Statistics" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 text-center">
                    <div className="md:stats shadow mt-10">
  
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="stat-title">Readers</div>
                            <div className="stat-value">3100K</div>
                            <div className="stat-desc">Jan 1st 1996 - Mar 1st 2024</div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title">New Users</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                            </div>
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab [--tab-bg:#FCF2A2] font-bold" aria-label="Blogs" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="text-center mb-2">
                        <p className="text-center text-3xl font-bold text-[#364c32]">Featured Blogs</p>
                    </div>
                    <hr />
                    <hr />
                    <div className="grid grid-cols-1 mt-10 gap-5">
                        {
                            blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold" aria-label="News" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <p className="text-center text-green-500 font-medium">
                        Under Development!
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;