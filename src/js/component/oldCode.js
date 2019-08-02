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
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container text-center">
							<div className="row">
								<div className="col" onClick={() => this.setState({ list: ["a", "b", "c", "d"] })}>
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
								{this.state.list && (
									<div className="col">
										{this.state.list.map((e, i) => {
											return <div key={i}>{e}</div>;
										})}
									</div>
								)}
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

//                                      <button
// 											className="btn btn-success"
// 											onClick={() => actions.changeColor(index, "orange")}>
// 											Change Color
// 										</button>
