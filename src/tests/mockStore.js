import configureStore from "redux-mock-store";
import Thunk from "redux-thunk";

import { store } from "../redux/store";

export const initialStore = store.getState();

const getMockedStore = configureStore([Thunk]);
const mockStore = newStore => getMockedStore(newStore || initialStore);

export default mockStore;
