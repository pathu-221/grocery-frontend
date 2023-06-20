import type { FC } from "react";

interface AccountProps {}

const Account: FC<AccountProps> = () => {
	return (
		<div className="tab-pane" id="account">
			<form action="#">
				<div className="row">
					<div className="col-sm-6 mb-4">
						<label>First Name *</label>
						<input type="text" name="first_name" placeholder="John" required />
					</div>
					<div className="col-sm-6 mb-4">
						<label>Last Name *</label>
						<input type="text" name="last_name" placeholder="Doe" required />
					</div>
				</div>

				<label>Display Name *</label>
				<input
					type="text"
					name="display_name"
					required
					placeholder="John Doe"
					className="mb-4"
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
					placeholder="nicework125@gmail.com"
				/>
				<fieldset>
					<legend>Password Change</legend>
					<label>Current password (leave blank to leave unchanged)</label>
					<input type="password" name="current_password" />

					<label>New password (leave blank to leave unchanged)</label>
					<input type="password" name="new_password" />

					<label>Confirm new password</label>
					<input type="password" name="confirm_password" />
				</fieldset>

				<button type="submit" className="btn btn-primary">
					SAVE CHANGES
				</button>
			</form>
		</div>
	);
};

export default Account;
