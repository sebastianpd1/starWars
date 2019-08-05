const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			cerebro: {
				list: null,
				single: null
			}
		},
		actions: {
			addToFavorites: item => {
				const store = getStore();
				if (
					store.favorites.find(e => {
						return e == item.name;
					})
				) {
					alert("THIS ITEM IS ALREADY IN FAVORITES");
				} else setStore({ favorites: store.favorites.concat(item.name) });
			},
			deleteFromFavorites: item => {
				const store = getStore();
				if (
					store.favorites.find(e => {
						return e == item.name;
					})
				) {
					store.favorites.splice(item.name, 1);
					setStore({ favorites: store.favorites });
				}
			},
			memory: level => {
				let { cerebro } = getStore();

				setStore({ cerebro: { list: level } });
			}
		}
	};
};

export default getState;
