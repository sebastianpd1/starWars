import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { List } from "../component/list";
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
								<div className="col">
									<div className="row" onClick={() => this.setState({ list: "Planets" })}>
										{"Planets"}
									</div>
									<div className="row">{"People"}</div>
									<div className="row">{"Vehicles"}</div>
								</div>
								{this.state.list && (
									<div className="col">
										<List toShow={this.state.list} />
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
