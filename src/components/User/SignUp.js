import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Shoppingimg from '../../images/welcome1.jpg';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import App from '../../App';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { signup } from '../../api/userapi';
import Signin from './Signin';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(15, 0),
		display: 'flex',
		maxHeight: '70vh',
	},

	paper: {
		margin: theme.spacing(8, 4),
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(10),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(0),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignUp = (props) => {
	let history = useHistory();
	const classes = useStyles();

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});

	//destructure

	const { firstName, lastName, email, password } = formData;
	const name = firstName + ' ' + lastName;
	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		signup({ name, email, password })
			//  console.log( signup({name,email,password}))
			.then((err) => {
				if (err) {
					console.log('error : ', err);
				} else {
					console.log('User Inserted');
					history.push('/signin');
					//  <Link to= "/signin" component={Signin} />
				}
			})
			.catch((err) => console.log('error in signup', err));
	};

	return (
		<App>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className="card my-5 overflow-hidden rounded-3 ">
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography
							className="my-2"
							component="h1"
							variant="h5"
						>
							Sign up
						</Typography>
						<form
							className={classes.form}
							noValidate
							onSubmit={onSubmit}
						>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										className="p-0"
										autoComplete="fname"
										name="firstName"
										variant="outlined"
										required
										fullWidth
										id="firstName"
										label="First Name"
										value={firstName}
										onChange={onChange}
										autoFocus
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="lastName"
										label="Last Name"
										name="lastName"
										autoComplete="lname"
										value={lastName}
										onChange={onChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
										value={email}
										onChange={onChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
										value={password}
										onChange={onChange}
									/>
								</Grid>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								onClick={props.signup}
							>
								Sign Up
							</Button>
							<Grid container justify="flex-end">
								<Grid item>
									<Link
										to="/signin"
										variant="body2"
										onClick={props.signup}
									>
										Already have an account? Sign in
									</Link>
								</Grid>
							</Grid>
						</form>
					</div>
				</div>
			</Container>
		</App>
	);
};
export default SignUp;
