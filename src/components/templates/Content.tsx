import Navbar from "./Navbar";
import Plan from "./Plan";
import PureText from "../modules/PureText";
import Seasons from "./Seasons";
import Features from "./Features";
import Mentoring from "./Mentoring";
import Questions from "./Questions";

function Content() {
	return (
		<>
			<Navbar />
			<PureText />
			<Features />
			<Plan />
			<Seasons />
			<Mentoring />
			<Questions />
		</>
	);
}

export default Content;
