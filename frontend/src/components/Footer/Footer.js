import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { BiNews } from "react-icons/bi";
import { BsLinkedin, BsInstagram, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
	return (
		<>
			<footer className="top-footer-conatiner">
				<div className="container-xxl">
					<div className="row d-flex align-items-center">
						<div className="col-xl-5 col-sm-6 col-12 mb-3">
							<div className="d-flex align-items-center gap-3">
								<BiNews className="fs-3 text-white" />
								<h4 className="mb-0 text-white">
									Sign Up for Newsletter
								</h4>
							</div>
						</div>
						<div className="col-xl-7 col-sm-6 col-12">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									placeholder="Your Email Address"
									aria-label="Your Email Address"
									aria-describedby="basic-addon2"
								/>
								<div className="input-group-text p-2">
									Subscribe
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<footer className="middle-footer-container">
				<div className="container-xxl">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
							<h4 className="text-white mb-3">Contact Us</h4>
							<div className="text-white">
								<address>
									522/23 2A Rajapur, Prayagraaj <br />
									PinCode: 210002
								</address>
								<a
									href="tel: +91 9120737085"
									className="mt-2 mb-1 text-white d-block"
								>
									+91 9120737085
								</a>
								<a
									href="mailto: kartikey1425@gmail.com"
									className="mt-2 mb-0 text-white d-block"
								>
									kartikey1425@gmail.com
								</a>
								<div className="social-icons d-flex align-items-center gap-3 mt-3">
									<a className="text-white" href="">
										<BsLinkedin className="fs-4" />
									</a>
									<a className="text-white" href="">
										<BsInstagram className="fs-4" />
									</a>
									<a className="text-white" href="">
										<BsGithub className="fs-4" />
									</a>
									<a className="text-white" href="">
										<BsYoutube className="fs-4" />
									</a>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
							<h4 className="text-white mb-3">Information</h4>
							<div className="footer-link">
								<Link>Privacy Policy</Link>
								<Link>Refund Policy</Link>
								<Link>Shipping Policy</Link>
								<Link>Term & Conditions</Link>
								<Link>Blogs</Link>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
							<h4 className="text-white mb-3">Account</h4>
							<div className="footer-link d-flex flex-column">
								<Link>About</Link>
								<Link>Faq</Link>
								<Link>Contact</Link>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
							<h4 className="text-white mb-3">Quick Links</h4>
							<div className="footer-link d-flex flex-column">
								<Link>Laptops</Link>
								<Link>Headphones</Link>
								<Link>Tablets</Link>
								<Link>Watch</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<footer>
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<p className="text-center text-white mb-0">
								&copy; {new Date().getFullYear()} Powered by
								Dev's Corner
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
