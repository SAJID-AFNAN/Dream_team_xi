import logo from "../../assets/images/logo-footer.png";
const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-400 px-10 pt-40 pb-10 mx-auto ">
        <div className="flex justify-center items-center text-center pb-10">
          <img
            src={logo}
            alt=""
          />
        </div>
        <div className="footer sm:footer-horizontal justify-between px-20 pb-8 border-b border-gray-600">
          <nav>
            <h6 className="font-bold text-lg text-white">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="font-bold text-lg text-white">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="font-bold text-lg text-white">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="font-bold text-lg text-white">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
        <div>
            <p className="text-center pt-8">@2024 Your Company All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
