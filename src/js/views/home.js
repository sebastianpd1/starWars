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
			single: null
		};
	}

	saveToState(item) {}

	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => {
					return (
						<div className="container">
							<div className="row">
								{store.lists.map((level, i) => (
									<div key={i} className="col-3">
										<List
											toShow={level}
											onClick={item => {
												if (i >= 3) this.setState({ single: item });
												else actions.addNewListLevel(item.data);
											}}
											//setSingle={(item) => this.saveToState(item)}
										/>
									</div>
								))}
								{this.state.single && (
									<div className="col">
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
