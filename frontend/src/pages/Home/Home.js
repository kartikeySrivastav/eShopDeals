import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<section className="home-wrapper py-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-6">
							<div className="main-banner">
								<img
									src="/assets/images/headphone-banner.webp"
									alt=""
								/>
								<div className="main-banner-content">
									<h4>SUPERCHARGED FOR PROS.</h4>
									<h5>iPad S13 Pro.</h5>
									<p>From ₹ 25000 or 1300/mo.</p>
									<Link className="button mt-3">Buy Now</Link>
								</div>
							</div>
						</div>
						<div className="col-6">
							<div className="d-flex align-items-center">
								<div className="main-banner">
									<img
										src="/assets/images/headphone-banner.webp"
										alt=""
									/>
									<div className="main-banner-content">
										<h4>SUPERCHARGED FOR PROS.</h4>
										<h5>iPad S13 Pro.</h5>
										<p>From ₹ 25000 or 1300/mo.</p>
										<Link className="button mt-3">
											Buy Now
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
