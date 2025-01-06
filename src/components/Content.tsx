import Features from "./modules/Features";
import Navbar from "./modules/Navbar";
import Plan from "./modules/Plan";
import PureText from "./modules/PureText";

function Content() {
	return (
		<>
			<Navbar />
			<PureText />
            <Features />
            <Plan />
		</>
	);
}

export default Content;
