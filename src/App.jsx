import { RestarauntPageContainer } from './pages/Restaraunts.jsx/container'; 
import { Provider } from "react-redux";
import { store } from "./components/redux";

export const App = () => {
    return(
        <>
            <Provider store={store}>
                <RestarauntPageContainer />
            </Provider>
        </>
    );
}