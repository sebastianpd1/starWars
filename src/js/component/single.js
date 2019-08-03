import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/demo.scss";

export class Single extends React.Component {
	render() {
		return (
			<div>
				<div>{this.props.toShowAfter.name}</div>
				<div>{this.props.toShowAfter}</div>;
			</div>
		);
	}
}

Single.propTypes = {
	toShowAfter: PropTypes.object
};
