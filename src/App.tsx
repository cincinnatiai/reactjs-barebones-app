import React from "react";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import store from "./app/store";

const App = (): React.JSX.Element => (
  <Provider store={store}>
    <div className="App">
      <HomePage />
    </div>
  </Provider>
);

export default App;
