import StoreProvider from "./context/Store/Provider";
import FunctionsApiProvider from "./context/Store/FunctionsApiProvider";
import RoutesWebSite from "./routes/routes";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <FunctionsApiProvider>
          <RoutesWebSite/>
        </FunctionsApiProvider>
      </StoreProvider>
    </div>
  );
}

export default App;
