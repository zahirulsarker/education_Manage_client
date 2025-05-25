import React from 'react';
import { MdOutlineCastForEducation } from 'react-icons/md';

const Footer = () => {
  return (
  <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
     <MdOutlineCastForEducation />
      <p className="font-bold">
        eduManage
        <br />
        Distributing quality education since 1992
      </p>
      <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				
				<a rel="noopener noreferrer" href="#">
					<span>Privacy policy  |</span>
				</a>
       
				<a rel="noopener noreferrer" href="#">
					<span>Terms of service</span>
				</a>
			</div>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by eduManage</p>
    </aside>
  <nav>
    <h6 className="footer-title">Our campus</h6>
    <a className="link link-hover">about us</a>
    <a className="link link-hover">courses</a>
    <a className="link link-hover">help centre</a>
    <a className="link link-hover">news</a>
    <a className="link link-hover">contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Academic</h6>
    <a className="link link-hover">Programming</a>
    <a className="link link-hover">Art & Design</a>
    <a className="link link-hover">Business</a>
    <a className="link link-hover">Engineering</a>
    <a className="link link-hover">Photography</a>
  </nav>
  <nav>
    <h6 className="footer-title">Subscribe</h6>
    <fieldset className="w-80">
      <label>Register now to get latest updates on promotions and coupons</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </nav>
</footer>   
    
  );
};

export default Footer;