import { toast } from "react-hot-toast";

export default function showToast(
	type: "info" | "danger" | "success" | "warning",
	msg: string
) {


	//let icon: string;
	switch (type) {
		case "info":
		case "danger": //icon = 'close'; break;
		case "success":
		case "warning":
	}

	toast.custom(() => (
		<div className={`alert alert-colored alert-${type} alert-icon`}>
			<i className="p-icon-checked"></i>
			<h5 className="alert-title">{msg}</h5>
			<button type="button" className="btn btn-link btn-close">
				<i className="p-icon-close"></i>
			</button>
		</div>
	));
}
