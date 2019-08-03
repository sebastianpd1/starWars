const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			lists: [
				[
					{ label: "People", data: { category: "people" } },
					{ label: "Planets", data: { category: "planets" } },
					{ label: "Vehicles", data: { category: "vehicles" } }
				]
			]
		},
		actions: {
			addToFavorites: itemName => {
				const store = getStore();
				setStore({ favorites: store.favorites.concat(itemName) });
			},
			addNewListLevel: item => {
				const store = getStore();
				if (item.category) {
					setStore({
						lists: store.lists.concat([
							store[item.category].map(p => {
								return {
									label: p.name,
									data: p
								};
							})
						])
					});
				} else if (item.name) {
					let itemProperties = [];
					for (let property in item) {
						itemProperties.push({
							label: property,
							data: property
						});
					}
					setStore({
						lists: store.lists.concat([itemProperties])
					});
				}
			}
		}
	};
};

export default getState;
