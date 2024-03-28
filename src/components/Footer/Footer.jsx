const Footer = () => {
    return (
        <footer className="p-10 bg-base-200 text-base-content text-center mt-10">
            <div className="footer max-w-6xl grid  place-content-center md:place-content-between	">
                <aside>
                   <img className="w-20 rounded-3xl mx-auto" src="https://i.ibb.co/N9CjLr2/book-logo.png" alt="" />
                    <p className="text-base"><span className="footer-title text-3xl">Book Vibe</span><br/>Providing Books Since 1992</p>
                </aside> 
                <nav>
                    <h6 className="footer-title">Services</h6> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Legal</h6> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;