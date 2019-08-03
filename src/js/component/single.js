import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/demo.scss";

export class Single extends React.Component {
	constructor() {
		super();
		this.state = {
			list: null,
			single: null
		};
	}
	render() {
		return <div className="container">{this.props.toShowAfter.name}</div>;
	}
}

Single.propTypes = {
	toShowAfter: PropTypes.object
};
