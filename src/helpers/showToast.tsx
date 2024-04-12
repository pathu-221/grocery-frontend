import { toast } from "react-hot-toast";

export default function showToast(
	type: "info" | "danger" | "success" | "warning",
	msg: string
) {
	let icon = "";

	//let icon: string;
	switch (type) {
		case "info":
			icon = "p-icon-setting";
			break;
		case "danger":
			icon = "p-icon-close-circle";
			break;
		//icon = 'close'; break;
		case "success":
			icon = "p-icon-checked";
			break;

		case "warning":
			icon = "p-icon-exclamation-triangle";
			break;
	}

	toast.custom(() => (
		<div className={`alert alert-colored alert-${type} alert-icon`}>
			<i className={icon}></i>
			<h5 className="alert-title">{msg}</h5>
			<button type="button" className="btn btn-link btn-close">
				<i className="p-icon-close"></i>
			</button>
		</div>
	));
}
