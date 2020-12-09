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

	// TODO onChange function
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
					value=""
					onChange=""
				/>
				{/* {errors.name.length > 0 ? (
					<p className="error">{errors.name}</p>
				) : null} */}
			</label>

			<label htmlFor="email">
				email
				<input
					id="email"
					type="text"
					name="email"
					value=""
					onChange=""
				/>
				{/* {errors.email.length > 0 ? (
					<p className="error">{errors.email}</p>
				) : null} */}
			</label>

			<label htmlFor="password">
				password
				<input
					id="password"
					type="text"
					name="password"
					value=""
					onChange=""
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
						checked=""
						onChange=""
					/>
					{/* {errors.termsOfService.length > 0 ? (
					<p className="error">{errors.termsOfService}</p>
				) : null} */}
				</label>
			</div>
		</form>
	);
}
