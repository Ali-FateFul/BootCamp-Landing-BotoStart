import Navbar from "./Navbar";
import Plan from "./Plan";
import PureText from "../modules/PureText";
import Seasons from "./Seasons";
import Features from "./Features";

function Content() {
	return (
		<>
			<Navbar />
			<PureText />
			<Features />
			<Plan />
			<Seasons />
		</>
	);
}

export default Content;
