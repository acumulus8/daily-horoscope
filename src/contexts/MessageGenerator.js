import React, { useEffect, useState } from "react";

const MessageGeneratorContext = React.createContext();

export const MessageHandlingProvider = ({ horoscopeParts, children }) => {
	const [horoscope, _setHoroscope] = useState("");
	const [userMetadataMessage, _setUserMetadataMessage] = useState("");
	const [sign, _setSign] = useState("");
	const [date, _setDate] = useState("");

	useEffect(() => generateUserMetadata(), [sign]);

	const generateUserMetadata = () => _setUserMetadataMessage(`Hello ${sign}! Today is ${date}, and your horoscope is:`);

	const generateHoroscope = async (sign) => {
		_setSign(sign);
		generateUserMetadata();
		const actionObject = horoscopeParts.actionObjects[Math.floor(Math.random() * horoscopeParts.actionObjects.length)];
		const action = horoscopeParts.actions[Math.floor(Math.random() * horoscopeParts.actions.length)];
		const predicionObjects = horoscopeParts.predictionObjects[Math.floor(Math.random() * horoscopeParts.predictionObjects.length)];
		const prediction = horoscopeParts.predictions[Math.floor(Math.random() * horoscopeParts.predictions.length)];
		_setHoroscope(`${actionObject} ${action}. ${predicionObjects} ${prediction}`);
	};

	const handleSetDate = (date) => {
		_setDate(date);
		return date;
	};

	const contextValues = { generateHoroscope, sign, date, handleSetDate, horoscope, userMetadataMessage };

	return <MessageGeneratorContext.Provider value={contextValues}>{children}</MessageGeneratorContext.Provider>;
};

export const useMessageHandler = () => React.useContext(MessageGeneratorContext);
