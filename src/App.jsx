import React, { useState } from "react";
import Screen from "./components/screen";
import ScreenTest from "./components/Test";

function App() {
	const [start, setStart] = useState(true);

	const isEndScreen = (isEnd) => isEnd ? setStart(false) : true

	return (
		<div className="App">
			{
				start && <Screen isEndScreen={isEndScreen} />
			}
			{
				!start && <ScreenTest/>
			}
		</div>
	);
}

export default App;
