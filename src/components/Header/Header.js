import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';
import { Link, withRouter, Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { faSearch, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let userData = '';
const Header = () => {
	const [userProfile, setUserProfile] = useState();

	const signOut = () => {
		if (!userData) {
			return <Redirect to="/signin" />;
		} else {
			localStorage.removeItem('jwt');
			toast.success(`Signout Successful`, { position: 'top-center' });
		}
	};

	useEffect(() => {
		userData = JSON.parse(localStorage.getItem('jwt'));
		console.log('userData', userData);
		setUserProfile(userData);
		// console.log("user",user);
	}, []);

	// console.log("usata",userData.user.name)
	return (
		<div className="mt-4 border-bottom">
			<div className="container mb-4 px-5 ">
				<div className=" my-auto pt-3 d-flex flex-row justify-content-between">
					<form className="form-inline  mx-3">
						<div className="form-group d-flex flex-row">
							<div className=" my-auto">
								<span className="mx-2 ">
									<FontAwesomeIcon
										className=""
										icon={faSearch}
										size="sm"
										color="gray"
									/>
								</span>
							</div>
							<input
								type="text"
								className="overflow-hidden border-0 w-50"
								placeholder="Search"
								style={{ outline: 'none' }}
							/>
						</div>
					</form>

					<div className="" style={{ marginLeft: '-100px' }}>
						<p
							className="border fs-5 border-dark p-2 px-3 my-auto font-monospace"
							style={{
								fontWeight: 'bold',
								color: '#404040',
								letterSpacing: '4px',
							}}
						>
							WHOLEMART
						</p>
					</div>
					<div
						className="my-auto d-flex flex-row"
						style={{ marginRight: '1rem' }}
					>
						{/* <Link className="header-icon m-2" to="/signin"><FontAwesomeIcon icon={faUser}  style={{ outline: "none"}}/></Link>  */}

						<PopupState
							variant="popover"
							popupId="demo-popup-popover"
						>
							{(popupState) => (
								<div className="my-auto">
									<a
										className="header-icon m-2"
										variant="contained"
										{...bindTrigger(popupState)}
									>
										<FontAwesomeIcon
											icon={faUser}
											style={{ outline: 'none' }}
										/>
									</a>
									<Popover
										{...bindPopover(popupState)}
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'center',
										}}
										transformOrigin={{
											vertical: 'top',
											horizontal: 'center',
										}}
									>
										<Box
											p={0}
											className="text-center"
											style={{
												backgroundColor: '#7971ea',
												color: 'white',
											}}
										>
											{/* <h4 className="text-uppercase">{ userProfile.user.name}</h4>  */}

											<div className="p-1">
												{!userData ? (
													<Link
														to="/signin"
														className="text-uppercase fs-6 p-1"
														style={{
															color: 'white',
															outline: 'none',
															textDecoration:
																'none',
														}}
													>
														LOGIN
													</Link>
												) : (
													<p
														className="text-uppercase border bg-white rounded mb-1 p-2"
														style={{
															fontSize: '1rem',
															color: '#7976ea',
														}}
													>
														{userData.user.name}
													</p>
												)}
											</div>

											{!userData ? (
												''
											) : (
												<div>
													<Button
														className=""
														style={{
															color: 'white',
														}}
														onClick={signOut}
													>
														Signout
													</Button>
												</div>
											)}
										</Box>
									</Popover>
								</div>
							)}
						</PopupState>

						<Link className="  header-icon m-2" to="/wishproduct">
							<FontAwesomeIcon
								icon={faHeart}
								style={{ outline: 'none' }}
							/>
						</Link>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default withRouter(Header);
