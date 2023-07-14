import type { FC } from "react";
import { User } from "../../interfaces/user.interface";
import { useNavigate } from "react-router-dom";

interface DashboardProps {
	user: User;
}

const Dashboard: FC<DashboardProps> = ({ user }) => {
	const navigate = useNavigate();

	return (
		<div className="tab-pane active" id="dashboard">
			<p className="mb-0">
				Hello{" "}
				<span className="font-weight-bold text-secondary">
					{`${user.first_name} ${user.last_name}`}
				</span>{" "}
				(not{" "}
				<span className="font-weight-bold text-secondary">
					{`${user.first_name} ${user.last_name}`}
				</span>
				?{" "}
				<a
					onClick={() => {
						localStorage.clear();
						navigate("/");
						window.location.reload();
					}}
					className="text-primary"
				>
					Log out
				</a>
				)
			</p>
			<p className="">
				From your account dashboard you can view your
				<a href="#orders" className="link-to-tab text-primary">
					recent orders
				</a>
				, manage your{" "}
				<a href="#address" className="link-to-tab text-primary">
					{" "}
					shipping and billing addresses
				</a>
				, and{" "}
				<a href="#account" className="link-to-tab text-primary">
					edit your password and account details
				</a>
				.
			</p>
			<div className="row cols-lg-3 cols-xs-2 cols-1 nav">
				<div className="ib-wrapper mb-4">
					<div className="icon-box text-center ib-border">
						<a href="#orders">
							<span className="icon-box-icon">
								<i className="p-icon-orders"></i>
							</span>
							<div className="icon-box-content">
								<p>ORDERS</p>
							</div>
						</a>
					</div>
				</div>
				<div className="ib-wrapper mb-4">
					<div className="icon-box text-center ib-border">
						<a href="#address">
							<span className="icon-box-icon">
								<i className="p-icon-map"></i>
							</span>
							<div className="icon-box-content">
								<p>ADDRESSES</p>
							</div>
						</a>
					</div>
				</div>
				<div className="ib-wrapper mb-4">
					<div className="icon-box text-center ib-border">
						<a href="#account">
							<span className="icon-box-icon">
								<i className="p-icon-user-solid"></i>
							</span>
							<div className="icon-box-content">
								<p>ACCOUNT DETAILS</p>
							</div>
						</a>
					</div>
				</div>
				<div className="ib-wrapper mb-4">
					<div className="icon-box text-center ib-border">
						<a
							onClick={() => {
								localStorage.clear();
								navigate("/");
								window.location.reload();
							}}
							className="no-tab-item"
						>
							<span className="icon-box-icon">
								<i className="p-icon-logout"></i>
							</span>
							<div className="icon-box-content">
								<p>LOGOUT</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
