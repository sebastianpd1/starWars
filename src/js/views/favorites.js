import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export class Favorites extends React.Component {
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
					return (
						<div className="col">
							{store.favorites.map((e, i) => (
								<div className="row" key={i}>
									{e}
								</div>
							))}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
