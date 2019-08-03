import React from "react";
import { Link } from "react-router-dom";
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
									<div key={index} onClick={() => this.props.setSingle(item)}>
										{item.name}
										<button
											className="btn btn-success"
											onClick={() => actions.addToFavorites(index, item)}>
											Add to Favorites
										</button>
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
