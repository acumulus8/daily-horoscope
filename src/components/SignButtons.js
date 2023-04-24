import React from "react";
import Aires from "./../assets/signs-icons/aires.png";
import Taurus from "./../assets/signs-icons/taurus.png";
import Gemini from "./../assets/signs-icons/gemini.png";
import Cancer from "./../assets/signs-icons/cancer.png";
import Leo from "./../assets/signs-icons/leo.png";
import Virgo from "./../assets/signs-icons/virgo.png";
import Libra from "./../assets/signs-icons/libra.png";
import Scorpio from "./../assets/signs-icons/scorpio.png";
import Sagitarius from "./../assets/signs-icons/sagitarius.png";
import Aquarius from "./../assets/signs-icons/aquarius.png";
import Capricorn from "./../assets/signs-icons/capricorn.png";
import Pisces from "./../assets/signs-icons/pisces.png";

import { useMessageHandler } from "../contexts/MessageGenerator";
import { Card } from "antd";
const { Meta } = Card;

const signImages = {
	aires: Aires,
	taurus: Taurus,
	gemini: Gemini,
	cancer: Cancer,
	leo: Leo,
	virgo: Virgo,
	libra: Libra,
	scorpio: Scorpio,
	sagittarius: Sagitarius,
	capricorn: Capricorn,
	aquarius: Aquarius,
	pisces: Pisces,
};

function SignButtons() {
	const { generateHoroscope } = useMessageHandler();

	const renderCards = () => {
		return Object.keys(signImages).map((sign) => {
			return (
				<Card
					key={sign}
					className="sign-button"
					hoverable
					cover={<img alt={sign + " sign image."} src={signImages[sign]} />}
					bodyStyle={{ padding: "10px 0", textAlign: "center", color: "#fff" }}
					onClick={() => generateHoroscope(sign)}
				>
					<Meta title={sign} />
				</Card>
			);
		});
	};

	return <section className="sign-buttons-container">{renderCards()}</section>;
}

export default SignButtons;
