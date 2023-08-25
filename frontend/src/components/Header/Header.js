import React, { useState } from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import {
	AiOutlineSearch,
	AiOutlineHeart,
	AiOutlineShoppingCart,
	AiOutlineMenuUnfold,
} from "react-icons/ai";
import { BiGitCompare, BiUserCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridR } from "react-icons/cg";

const Header = () => {
	const [topMenuVisible, setTopMenuVisible] = useState(false);
	const [bottomMenuVisible, setBottomMenuVisible] = useState(false);
	return (
		<>
			<header className="main-header">
				<div className="header-top-strip">
					<div className="container-xxl">
						<div className="row d-flex align-items-center justify-content-between">
							<div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-5">
								<h3 className="mb-0">
									<Link className="logo">Shop Deals</Link>
								</h3>
							</div>
							<div className="col-xl-10 col-lg-9 col-md-9 col-sm-9 col-7">
								<div className="container pe-0">
									<div className="row d-flex align-items-center justify-content-end">
										<div className="col-xl-6 col-lg-8 col-md-7 d-md-block d-sm-none d-none">
											<div className="search-container">
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														placeholder="Search"
														aria-label="Search"
														aria-describedby="basic-addon2"
													/>
													<div className="input-group-text">
														<AiOutlineSearch className="fs-5" />
													</div>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-lg-4 col-md-5 col-sm-3 pe-0">
											<div className="menu-list">
												<div className="menu-item d-md-none d-sm-block">
													<div
														className="menu-link"
														onClick={() =>
															setTopMenuVisible(
																!topMenuVisible
															)
														}
													>
														<GiHamburgerMenu className="fs-3" />
													</div>
												</div>
												<div className="mobile-menu">
													<div className="menu-item">
														<Link className="menu-link">
															<BiGitCompare className="fs-3" />
															<p>
																Compare <br />{" "}
																Product{" "}
															</p>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link">
															<AiOutlineHeart className="fs-3" />
															<p>
																Favourite <br />{" "}
																Wishlist{" "}
															</p>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link">
															<div className="cart-container">
																<AiOutlineShoppingCart className="cart-icon fs-3" />
																<div className="number-badge">
																	<span>
																		0
																	</span>
																</div>
															</div>
															<p>Cart</p>
														</Link>
													</div>
												</div>
												<div className="menu-item">
													<Link className="menu-link">
														<BiUserCircle className="fs-3" />
														<p>
															Login <br /> User{" "}
														</p>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{topMenuVisible && (
					<div
						className={`top-mobile-collapse ${
							topMenuVisible ? "open" : ""
						}`}
					>
						<div>
							<div className="search-container">
								<div className="input-group">
									<input
										type="text"
										className="form-control"
										placeholder="Search"
										aria-label="Search"
										aria-describedby="basic-addon2"
									/>
									<div className="input-group-text">
										<AiOutlineSearch className="fs-5" />
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex">
							<div className="list-item">
								<Link className="list-link">
									<BiGitCompare className="fs-3" />
									<p>
										Compare <br /> Product{" "}
									</p>
								</Link>
							</div>
							<div className="list-item">
								<Link className="list-link">
									<AiOutlineHeart className="fs-3" />
									<p>
										Favourite <br /> Wishlist{" "}
									</p>
								</Link>
							</div>
							<div className="list-item">
								<Link className="list-link">
									<div className="cart-container">
										<AiOutlineShoppingCart className="cart-icon fs-3" />
										<div className="number-badge">
											<span>0</span>
										</div>
									</div>
									<p>Cart</p>
								</Link>
							</div>
						</div>
					</div>
				)}
				<div className="header-bottom-strip">
					<div className="container-xxl">
						<div className="row">
							<div className="d-flex align-items-center gap-4">
								<div className="dropdown">
									<button
										className="btn btn-secondary dropdown-toggle bg-transparent border-0"
										type="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<CgMenuGridR className="fs-3" />
										<span className="d-inline-block">
											Shop Categories
										</span>
									</button>
									<ul className="dropdown-menu">
										<li>
											<Link className="dropdown-item">
												Action
											</Link>
										</li>
										<li>
											<Link className="dropdown-item">
												Another action
											</Link>
										</li>
										<li>
											<Link className="dropdown-item">
												Something else here
											</Link>
										</li>
									</ul>
								</div>
								<div className="header-nav-list">
									<div className="header-item">
										<div
											className={`bottom-header-menu`}
											onClick={() =>
												setBottomMenuVisible(
													!bottomMenuVisible
												)
											}
										>
											<AiOutlineMenuUnfold className="fs-3 text-white" />
										</div>
									</div>
									<div className="bottom-desktop-nav">
										<div className="header-item">
											<NavLink className="header-link">
												Home
											</NavLink>
										</div>
										<div className="header-item">
											<NavLink className="header-link">
												Our Store
											</NavLink>
										</div>
										<div className="header-item">
											<NavLink className="header-link">
												Blogs
											</NavLink>
										</div>
										<div className="header-item">
											<NavLink className="header-link">
												Contact
											</NavLink>
										</div>
									</div>
								</div>
							</div>
							{bottomMenuVisible && (
								<div
									className={`bottom-mobile-collapse ${
										bottomMenuVisible ? "open" : ""
									}`}
								>
									<div className="bottom-mobile-nav">
										<div className="header-item">
											<NavLink className="header-link">
												Home
											</NavLink>
										</div>
										<div className="header-item">
											<NavLink className="header-link">
												Our Store
											</NavLink>
										</div>
										<div className="header-item">
											<NavLink className="header-link">
												Blogs
											</NavLink>
										</div>
										<div className="header-item">
											<NavLink className="header-link">
												Contact
											</NavLink>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
