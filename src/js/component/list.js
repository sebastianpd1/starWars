import React from "react";
import { Link } from "react-router-dom";
import { Estrella } from "./estrella";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/demo.scss";

export class List extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							{store[this.props.toShow].map((item, index) => {
								return (
									<div className="row" key={index}>
										<div className="col" onClick={() => this.props.setSingle(item)}>
											{item.name}
										</div>
										<div className="col">
											<Estrella theItem={item} />
										</div>
									</div>
								);
							})}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

List.propTypes = {
	toShow: PropTypes.string,
	setSingle: PropTypes.func
};
