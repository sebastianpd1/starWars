import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { List } from "../component/list";
import { Single } from "../component/single";
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
				{({ actions, store }) => {
					// 	if (this.state.single) {
					// 		actions.memory(this.state.single);
					// 	}
					return (
						<div className="container">
							<div className="row">
								<div className="col-1 bg-secondary text-white">
									<div className="row" onClick={() => this.setState({ list: "planets" })}>
										Planets
									</div>
									<div className="row" onClick={() => this.setState({ list: "people" })}>
										People
									</div>
									<div className="row" onClick={() => this.setState({ list: "vehicles" })}>
										Vehicles
									</div>
								</div>
								{this.state.list && (
									<div className="col-3 bg-dark text-white">
										<List
											toShow={this.state.list}
											setSingle={item => this.setState({ single: item })}
											//setSingle={(item) => this.saveToState(item)}
										/>
									</div>
								)}
								{this.state.single && (
									<div className="col bg-info text-white">
										<Single toShowAfter={this.state.single} />
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
