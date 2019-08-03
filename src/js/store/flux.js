const getState = ({ getStore, setStore }) => {
	return {
		store: { people: [], planets: [], vehicles: [], favorites: [] },
		actions: {
			addToFavorites: itemName => {
				const store = getStore();
				setStore({ favorites: store.favorites.concat(itemName) });
			}
		}
	};
};

export default getState;
