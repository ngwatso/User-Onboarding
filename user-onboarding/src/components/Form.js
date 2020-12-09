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
	};

	// TODO onSubmit function
	// TODO post request
	// TODO add schema for validation
	// TODO set up jsx

	return (
		<form>
			{/* {serverError && <p className="error">{serverError}</p>} */}

			<label htmlFor="name">
				Name
				<input
					id="name"
					type="text"
					name="name"
					value={formState.name}
					onChange={iputChange}
				/>
				{/* {errors.name.length > 0 ? (
					<p className="error">{errors.name}</p>
				) : null} */}
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
				{/* {errors.email.length > 0 ? (
					<p className="error">{errors.email}</p>
				) : null} */}
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
				{/* {errors.password.length > 0 ? (
					<p className="error">{errors.password}</p>
				) : null} */}
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
					{/* {errors.termsOfService.length > 0 ? (
					<p className="error">{errors.termsOfService}</p>
				) : null} */}
				</label>
			</div>
			<button type="submit" disabled={buttonIsDisabled}>
				submit
			</button>
		</form>
	);
}
