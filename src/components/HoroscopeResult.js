import React from "react";
import { useMessageHandler } from "../contexts/MessageGenerator";

function HoroscopeResult() {
	const { horoscope, userMetadataMessage } = useMessageHandler();
	return (
		<>
			<section>
				{horoscope && (
					<>
						<h3>{userMetadataMessage}</h3>
						<p>{horoscope}</p>
					</>
				)}
			</section>
		</>
	);
}

export default HoroscopeResult;
