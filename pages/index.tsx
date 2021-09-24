import type { NextPage } from "next";
import Header from "../components/Header";
import Nav from "../components/nav";
import Carousel from "../components/Carousel";
import Cardheader from "../components/Cardheader";
import Card from "../components/Card";
import Categorycard from "../components/Categorycard";
// import Featurecard from "../components/Featured";
// import Discountcard from "../components/discount";
// import Smallcard from "../components/Smallcard";
// import Sidebar from "../components/Sidebar";
import Servicecard from "../components/Servicecard";
const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Nav />
			<Carousel />
			<div style={{ backgroundColor: "#F6F9FC" }}>
				<Cardheader />
				<Categorycard />
			</div>
		</>
	);
};

export default Home;
