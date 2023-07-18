import type { FC, ChangeEvent, FormEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { updateUser, updateUserPassword } from "../../apis/user.api";
import showToast from "../../helpers/showToast";

interface AccountProps {}

const Account: FC<AccountProps> = () => {
	const user = useSelector((state: RootState) => state.user.user);
	const [nameForm, setNameForm] = useState({
		first_name: user?.first_name || "",
		last_name: user?.last_name || "",
	});

	const [passwordForm, setPasswordForm] = useState({
		new_password: "",
		confirm_new_password: "",
		old_password: "",
	});

	const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNameForm({
			...nameForm,
			[e.target.name]: e.target.value,
		});
	};

	const onPassChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPasswordForm({
			...passwordForm,
			[e.target.name]: e.target.value,
		});
	};

	const onNameSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const data = await updateUser(nameForm);
		if (!data.status) return showToast("danger", data.msg);

		showToast("success", data.msg);
	};

	const onPassSubmit = async (e: FormEvent) => {

		e.preventDefault();

		if (passwordForm.new_password !== passwordForm.confirm_new_password)
			return alert("Passwords do not match!");

		const requestBody = {
			old_password: passwordForm.old_password,
			new_password: passwordForm.new_password,
		};
		const data = await updateUserPassword(requestBody);
		if (!data.status) return showToast("danger", data.msg);

		showToast("success", data.msg);
		setPasswordForm({
			new_password: "",
			confirm_new_password: "",
			old_password: "",
		});
	};

	return (
		<div className="tab-pane" id="account">
			<form onSubmit={onNameSubmit} action="#">
				<div className="row">
					<div className="col-sm-6 mb-4">
						<label>First Name *</label>
						<input
							type="text"
							name="first_name"
							placeholder="John"
							required
							onChange={onNameChange}
							defaultValue={user?.first_name}
						/>
					</div>
					<div className="col-sm-6 mb-4">
						<label>Last Name *</label>
						<input
							type="text"
							name="last_name"
							defaultValue={user?.last_name}
							placeholder="Doe"
							onChange={onNameChange}
							required
						/>
					</div>
				</div>

				<label>User Name *</label>
				<input
					type="text"
					name="display_name"
					required
					disabled
					placeholder="John Doe"
					defaultValue={user?.user_name}
					className="mb-1"
				/>
				<span>
					<small className="d-block mb-4">
						This will be how your name will be displayed in the account section
						and in reviews
					</small>
				</span>

				<label>Email Address *</label>
				<input
					type="email"
					name="email"
					required
					disabled
					defaultValue={user?.email}
					placeholder="nicework125@gmail.com"
				/>
				<button type="submit" className="btn btn-primary mt-4">
					SAVE CHANGES
				</button>
			</form>
			<form onSubmit={onPassSubmit}>
				<fieldset>
					<legend>Password Change</legend>
					<label>Current password (leave blank to leave unchanged)</label>
					<input
						type="password"
						required
						onChange={onPassChange}
						defaultValue={passwordForm.old_password}
						name="old_password"
					/>

					<label>New password (leave blank to leave unchanged)</label>
					<input
						type="password"
						required
						onChange={onPassChange}
						defaultValue={passwordForm.new_password}
						name="new_password"
					/>

					<label>Confirm new password</label>
					<input
						type="password"
						required
						onChange={onPassChange}
						defaultValue={passwordForm.confirm_new_password}
						name="confirm_new_password"
					/>
				</fieldset>
				<button type="submit" className="btn btn-primary">
					SAVE CHANGES
				</button>
			</form>
		</div>
	);
};

export default Account;
