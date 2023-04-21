import "./styles/App.css";

import Header from "./components/Header";
import BirthDatePicker from "./components/BirthDatePicker";
import SignButtons from "./components/SignButtons";

function App() {
	return (
		<div className="app">
			<Header />
			<BirthDatePicker />
			<SignButtons />
		</div>
	);
}

export default App;

