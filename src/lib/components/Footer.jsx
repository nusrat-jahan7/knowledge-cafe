const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-100 border-t text-base-content">
        <div>
          <span className="footer-title text-xl">Services</span> 
          <a className="link link-hover font-semibold">Branding</a>
          <a className="link link-hover font-semibold">Design</a>
          <a className="link link-hover font-semibold">Marketing</a>
          <a className="link link-hover font-semibold">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title text-xl">Company</span> 
          <a className="link link-hover font-semibold">About us</a>
          <a className="link link-hover font-semibold">Contact</a>
          <a className="link link-hover font-semibold">Jobs</a>
          <a className="link link-hover font-semibold">Press kit</a>
        </div> 
        <div>
          <span className="footer-title text-xl">Legal</span> 
          <a className="link link-hover font-semibold">Terms of use</a>
          <a className="link link-hover font-semibold">Privacy policy</a>
          <a className="link link-hover font-semibold">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;