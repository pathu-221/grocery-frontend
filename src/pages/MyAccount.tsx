import type { FC } from "react";
import MyAccountPageTab from "../components/MyAccountPage/MyAccountTab";

interface MyAccountPageProps {}

const MyAccountPage: FC<MyAccountPageProps> = () => {
	return (
		<main className="main account-page">
			<div
				className="page-header"
				style={{
					backgroundColor: "#f9f8f4",
				}}
			>
				<h1 className="page-title">My Account</h1>
			</div>
			<nav className="breadcrumb-nav has-border">
				<div className="container">
					<ul className="breadcrumb">
						<li>
							<a href="/">Home</a>
						</li>
						<li>My account</li>
					</ul>
				</div>
			</nav>

			<div className="page-content mt-4 mb-10 pb-6">
				<div className="container">
					<MyAccountPageTab />
				</div>
			</div>
		</main>
	);
};

export default MyAccountPage;
