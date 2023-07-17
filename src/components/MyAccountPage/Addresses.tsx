import type { ChangeEvent, FC, FormEvent } from "react";
import { useState, useEffect } from "react";
import { Address } from "../../interfaces/address.interface";
import { addAddresses, fetchAllAddresses } from "../../apis/address.api";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import showToast from "../../helpers/showToast";

interface AddressesProps {}

const Addresses: FC<AddressesProps> = () => {
	const [addresses, setAddresses] = useState<Address[]>();
	const [billingAddress, setBillingAddress] = useState<Address>();
	const [shippingAddress, setShippingAddress] = useState<Address>();
	const [addressToEdit, setAddressToEdit] = useState<any>({});

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		loadAddresses();
	}, []);

	useEffect(() => {
		if (!addresses) return;

		setBillingAddress(addresses[0]);
		setShippingAddress(addresses[1]);
	}, [addresses]);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAddressToEdit({
			...addressToEdit,
			[e.target.name]:
				e.target.name === "zip" ? e.target.valueAsNumber : e.target.value,
		});
	};

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		console.log({ addressToEdit });
		const data = await addAddresses({
			...addressToEdit,
		});
		if (!data.status) return showToast("danger", data.msg);

		showToast("success", data.msg);
		loadAddresses();
		setShowModal(false);
	};

	const loadAddresses = async () => {
		const data = await fetchAllAddresses();
		if (!data.status) return alert(data.msg);

		setAddresses(data.data);
	};

	return (
		<div className="tab-pane" id="address">
			<p>
				The following addresses will be used on the checkout page by default.
			</p>
			<div className="row">
				<div className="col-sm-6 mb-4">
					<div className="card card-address">
						<div className="card-body">
							<h5 className="card-title lh-2 mb-2">Billing Address</h5>
							{billingAddress ? (
								<>
									<p>
										{billingAddress.name}
										<br />
										{billingAddress.address_1}
										{billingAddress.address_2 && (
											<>
												<br />
												{billingAddress.address_2}
											</>
										)}
										<br />
										{`${billingAddress.state}, ${billingAddress.city} - ${billingAddress.zip}`}
									</p>
									<a
										onClick={() => {
											setAddressToEdit(billingAddress);
											setShowModal(true);
										}}
										href="#"
										className="btn btn-link btn-primary btn-underline"
									>
										Edit your billing address
										<i className="p-icon-arrow-long-right"></i>
									</a>
								</>
							) : (
								<>
									<p>You have not set up this type of address yet.</p>
									<a
										onClick={() => setShowModal(true)}
										//href="#"
										className="btn btn-link btn-primary btn-underline"
									>
										Add <i className="p-icon-arrow-long-right"></i>
									</a>
								</>
							)}
						</div>
					</div>
				</div>
				<div className="col-sm-6 mb-4">
					<div className="card card-address">
						<div className="card-body">
							<h5 className="card-title lh-2 mb-2">Shipping Address</h5>
							{shippingAddress ? (
								<>
									<p>
										{shippingAddress.name}
										<br />
										{shippingAddress.address_1}
										{shippingAddress.address_2 && (
											<>
												<br />
												{shippingAddress.address_2}
											</>
										)}
										<br />
										{`${shippingAddress.state}, ${shippingAddress.city} - ${shippingAddress.zip}`}
									</p>
									<a
										onClick={() => {
											setAddressToEdit(billingAddress);
											setShowModal(true);
										}}
										//href="#"
										className="btn btn-link btn-primary btn-underline"
									>
										Edit your shipping address
										<i className="p-icon-arrow-long-right"></i>
									</a>
								</>
							) : (
								<>
									<p>You have not set up this type of address yet.</p>
									<a
										onClick={() => setShowModal(true)}
										//href="#"
										className="btn btn-link btn-primary btn-underline"
									>
										Add <i className="p-icon-arrow-long-right"></i>
									</a>
								</>
							)}
						</div>
					</div>
				</div>
			</div>

			{/** modals */}
			<Modal
				classNames={{
					modal: "customModal",
				}}
				center
				open={showModal}
				onClose={() => {
					setShowModal(false);
					setAddressToEdit(undefined);
				}}
			>
				<h2 style={{ marginBottom: "5px" }}>Edit address</h2>
				<form className="form" onSubmit={onSubmit}>
					<label>Name*</label>
					<input
						type="text"
						className="form-control"
						name="name"
						required
						onChange={onChange}
						defaultValue={addressToEdit?.name}
					/>

					<label>Address line 1*</label>
					<input
						type="text"
						className="form-control"
						name="address_1"
						required
						onChange={onChange}
						defaultValue={addressToEdit?.address_1}
					/>
					<label>Address line 2</label>
					<input
						type="text"
						className="form-control"
						name="address_2"
						onChange={onChange}
						defaultValue={addressToEdit?.address_2}
					/>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "2rem",
						}}
					>
						<div style={{ width: "50%" }}>
							<label>City*</label>
							<input
								type="text"
								className="form-control"
								name="city"
								onChange={onChange}
								defaultValue={addressToEdit?.city}
							/>
						</div>
						<div style={{ width: "50%" }}>
							<label>State*</label>
							<input
								type="text"
								className="form-control"
								name="state"
								onChange={onChange}
								defaultValue={addressToEdit?.state}
							/>
						</div>
					</div>
					<label>Zip Code*</label>
					<input
						type="number"
						className="form-control"
						name="zip"
						onChange={onChange}
						defaultValue={addressToEdit?.zip}
					/>
					<button type="submit" className="btn btn-dim btn-block mt-2">
						Save
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default Addresses;
