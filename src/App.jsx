import { RestarauntPage } from "./pages/Restaraunts.jsx/component"
import { Provider } from "react-redux";
import { store } from "./components/redux";

export const App = () => {
    return(
        <>
            <Provider store={store}>
                <RestarauntPage />
            </Provider>
        </>
    );
}