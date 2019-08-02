import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			list: null,
			single: null
		};
	}
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					<div className="row">
						<div className="col bg-dark">
							{({ store, actions }) => {
								return (
									<div className="row">
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
										{store.planets.map((item, index) => {
											return (
												<div key={index}>
													{item.name}
													<button
														className="btn btn-success"
														onClick={() => actions.addToFavorites(index, item.name)}>
														Add to Favorites
													</button>
												</div>
											);
										})}
										{store.vehicles.map((item, index) => {
											return (
												<div key={index}>
													{item.name}
													<button
														className="btn btn-success"
														onClick={() => actions.addToFavorites(item.name)}>
														Add to Favorites
													</button>
												</div>
											);
										})}
										{store.vehicles.map((item, index) => {
											return (
												<div key={index}>
													{item.name}
													<button
														className="btn btn-success"
														onClick={() => actions.addToFavorites(item.name)}>
														Add to Favorites
													</button>
												</div>
											);
										})}
									</div>
								);
							}}
						</div>
						<div className="col bg-danger">HI</div>
						<div className="col bg-info">HELLO</div>
					</div>
				</Context.Consumer>
			</div>
		);
	}
}