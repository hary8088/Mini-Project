import React from "react";

import Styles from "../login/login.module.css";
const login = () => {
	return (
		<>
			<div className={Styles.head}>
				<div className={Styles.image}>
					<img
						src='https://images.pexels.com/photos/1029611/pexels-photo-1029611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
					/>
				</div>
				<div className={Styles.content}>
					<h1>Log in</h1>
					<div className={Styles.forms}>
						<div className={Styles.field}>
							<form className={Styles.f1} action=''>
								<label className={Styles.space}>UserName*</label>
								<input
									type='text'
									name=''
									id=''
									placeholder='Enter your Username'
								/>

								<label className={Styles.space}>Password*</label>
								<input
									type='password'
									name=''
									placeholder='Enter your Password'
									id=''
								/>

								<div className={Styles.check}>
									<input type='checkbox' name='' id='' />
									<label> Remember Me</label>
								</div>

								<div className={Styles.button}>
									<a href='http://localhost:3000/admin/'>
										<input type='button' value='Login' />
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default login;
