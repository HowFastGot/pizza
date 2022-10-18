import { onCartsLoading, onCartsLoaded, onCartsLoadingError } from "../../redux/reducers-actions/mainPageSlice";

const fetchCarts = (request) => (dispatch) => {

     dispatch(onCartsLoading());
     request("http://localhost:3001/carts")
          .then((data) => dispatch(onCartsLoaded(data)))
          .catch(() => dispatch(onCartsLoadingError()));
}

export default fetchCarts;