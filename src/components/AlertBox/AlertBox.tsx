import React from "react";
import "./AlertBox.css";
import Card from "./../Card/Card";
import { IButtonCallback } from "../../@types/config";

interface AlertBoxProps {
	message: string;
	handleProceed: IButtonCallback;
	handleCancel: IButtonCallback;
}
const AlertBox: React.FC<AlertBoxProps> = ({
	message,
	handleCancel,
	handleProceed
}) => {
	return (
		<Card>
			<div className="alert_box__container">
				<p className="alert_box__message">{message}</p>
				<div className="alert_box__btn_container">
					<button
						className="alert_box__btn success_btn"
						onClick={handleProceed}
					>
						Proceed
					</button>
					<button
						className="alert_box__btn danger_btn"
						onClick={handleCancel}
					>
						Cancel
					</button>
				</div>
			</div>
		</Card>
	);
};
export default AlertBox;
