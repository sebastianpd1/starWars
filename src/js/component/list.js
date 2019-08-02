import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/demo.scss";

export class List extends React.Component {
	constructor() {
		super();
		this.state = {
			list: null,
			single: null
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return this.props.toShow == "Planets" ? (
						<div>
							{store.people.map((item, index) => {
								return (
									<div key={index}>
										{item.name}
										<button
											className="btn btn-success"
											onClick={() => actions.addToFavorites(index, item.name)}>
											Add to Favorites
										</button>
										<button
											className="btn btn-success"
											onClick={() => this.setState({ view: "one" })}>
											Add to Favorites
										</button>
									</div>
								);
							})}
						</div>
					) : this.props.toShow == "People" ? (
						<div>
							{store.people.map((item, index) => {
								return (
									<div key={index}>
										{item.name}
										<button
											className="btn btn-success"
											onClick={() => actions.addToFavorites(index, item.name)}>
											Add to Favorites
										</button>
										<button
											className="btn btn-success"
											onClick={() => this.setState({ view: "one" })}>
											Add to Favorites
										</button>
									</div>
								);
							})}
						</div>
					) : this.props.toShow == "Vehicles" ? (
						<div>
							{store.people.map((item, index) => {
								return (
									<div key={index}>
										{item.name}
										<button
											className="btn btn-success"
											onClick={() => actions.addToFavorites(index, item.name)}>
											Add to Favorites
										</button>
										<button
											className="btn btn-success"
											onClick={() => this.setState({ view: "one" })}>
											Add to Favorites
										</button>
									</div>
								);
							})}
						</div>
					) : (
						<div>NOTHING TO SHOW</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

List.propTypes = {
	toShow: PropTypes.string
};
