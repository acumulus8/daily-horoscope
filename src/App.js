import "./styles/App.css";
import Header from "./components/Header";
import SignButtons from "./components/SignButtons";
import HoroscopeResult from "./components/HoroscopeResult";
import { MessageHandlingProvider } from "./contexts/MessageGenerator";
import { horoscopeParts } from "./utils/horoscope-parts";

function App() {
	return (
		<div className="app">
			<MessageHandlingProvider horoscopeParts={horoscopeParts}>
				<Header />
				<SignButtons />
				<HoroscopeResult />
			</MessageHandlingProvider>
		</div>
	);
}

export default App;

