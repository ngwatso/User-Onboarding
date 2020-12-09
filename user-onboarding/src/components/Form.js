import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
	// TODO set up state for form

	const [formState, setFormState] = useState({
		name: "",
		email: "",
		password: "",
		termsOfService: false,
	});

	// TODO server error

	const [serverError, setServerError] = useState("");

	// TODO submittal state

	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

	// TODO set up password state
	// TODO error state

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
		termsOfService: "",
	});

	// TODO response from API

	const [post, setPost] = useState([]);

	// TODO inline validation

	const validateChange = (e) => {
		yup.reach(formSchema, e.target.name)
			.validate(
				e.target.type === "checkbox"
					? e.target.checked
					: e.target.value
			)
			.then((valid) => {
				setErrors({ ...errors, [e.target.name]: "" });
			})
			.catch((err) => {
				console.log("ERROR", err);
				setErrors({ ...errors, [e.target.name]: err.errors[0] });
			});
	};

	// TODO onChange function

	const inputChange = (e) => {
		e.persist();

		const newFormState = {
			...formState,
			[e.target.name]:
				e.target.type === "checkbox"
					? e.target.checked
					: e.target.value,
		};

		validateChange(e);
		setFormState(newFormState);
	};

	// TODO onSubmit function

	const formSubmit = (e) => {
		e.preventDefault();

		// TODO post request

		axios.post("https://reqres.in/api/users", formState)
			.then((res) => {
				console.log("RESPONSE", res);
				setPost(res.data);
				setServerError(null);
				setFormState({
					name: "",
					email: "",
					password: "",
					termsOfService: false,
				});
			})
			.catch((err) => {
				setServerError("Oops! Something went wrong!");
			});
	};

	// TODO add schema for validation

	const formSchema = yup.object().shape({
		name: yup.string().required("Name is required."),
		email: yup.string().email(),
		password: yup.string().required("Password is required."),
		termsOfService: yup.boolean().oneOf([true]),
	});

	// TODO useEffect

	useEffect(() => {
		formSchema.isValid(formState).then((valid) => {
			console.log("Is form valid?", valid);
			setButtonIsDisabled(!valid);
		});
	}, [formState]);

	// console.log("formState", formState);

	// TODO set up jsx

	return (
		<form onSubmit={formSubmit}>
			{serverError && <p className="error">{serverError}</p>}

			<label htmlFor="name">
				Name
				<input
					id="name"
					type="text"
					name="name"
					value={formState.name}
					onChange={inputChange}
				/>
				{errors.name.length > 0 ? (
					<p className="error">{errors.name}</p>
				) : null}
			</label>

			<label htmlFor="email">
				Email
				<input
					id="email"
					type="text"
					name="email"
					value={formState.email}
					onChange={inputChange}
				/>
				{errors.email.length > 0 ? (
					<p className="error">{errors.email}</p>
				) : null}
			</label>

			<label htmlFor="password">
				Password
				<input
					id="password"
					type="text"
					name="password"
					value={formState.password}
					onChange={inputChange}
				/>
				{errors.password.length > 0 ? (
					<p className="error">{errors.password}</p>
				) : null}
			</label>

			<div className="termsOfService">
				<label htmlFor="termsOfService">
					I Accept the Terms of Service
					<input
						id="termsOfService"
						name="termsOfService"
						type="checkbox"
						checked={formState.termsOfService}
						onChange={inputChange}
					/>
					{errors.termsOfService.length > 0 ? (
						<p className="error">{errors.termsOfService}</p>
					) : null}
				</label>
			</div>
			<button type="submit" disabled={buttonIsDisabled}>
				submit
			</button>
			<pre>{JSON.stringify(post, null, 2)}</pre>
		</form>
	);
}
