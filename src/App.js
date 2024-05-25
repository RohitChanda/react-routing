import "./App.css";
import AuthProvider from "./context/AuthProvider";
import RoutesComponent from "./routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesComponent />
      </AuthProvider>
    </div>
  );
}

export default App;
