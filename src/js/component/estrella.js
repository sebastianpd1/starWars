import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/demo.scss";

export class Estrella extends React.Component {
	constructor() {
		super();
		this.state = {
			toggle: false
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => {
					return (
						<div>
							{!store.favorites.find(e => e === this.props.theItem.name) ? (
								<i
									className="far fa-star"
									onClick={() => {
										actions.addToFavorites(this.props.theItem);
									}}
								/>
							) : (
								<i
									className="fas fa-star"
									onClick={() => {
										actions.deleteFromFavorites(this.props.theItem.name);
									}}
								/>
							)}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Estrella.propTypes = {
	theItem: PropTypes.object
};
