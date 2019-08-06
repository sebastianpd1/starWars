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
				let theIndex;
				if (
					store.favorites.find(e => {
						return e == item;
					})
				) {
					theIndex = store.favorites.indexOf(item);
					store.favorites.splice(theIndex, 1);
					setStore({ favorites: store.favorites });
				} else {
					alert("this item has already been removed");
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
