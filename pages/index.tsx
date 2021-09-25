import type { NextPage } from "next";
import Header from "../components/Header";
import Nav from "../components/nav";
import Carousel from "../components/Carousel";
import Cardheader from "../components/Cardheader";
import Card from "../components/Card";
import Categorycard from "../components/Categorycard";
import Ratedcard from "../components/Ratedcard";
import Arrivalcard from "../components/Arrivals";
import { IoFlashSharp } from "react-icons/Io5";
import { BsFillGridFill } from "react-icons/Bs";
import { GiStarGate, GiJusticeStar, GiPresent } from "react-icons/Gi";
import { MdFiberNew } from "react-icons/Md";
import Servicecard from "../components/Servicecard";
import {
	Cardhelper,
	Ratedhelper,
	Featurehelper,
	Arrivalheler,
	Discounthelper,
	Carhelper,
	Carside,
	Mobileside,
	Mobhelper,
	Optickside,
	Opthelper,
	SmallHelper,
	Morehelper,
	Servicehelper,
} from "../components/helper/Card.helper";
import { Categoryhelper } from "../components/helper/Category.helper";
import Featurecard from "../components/Featured";
import Discountcard from "../components/Discount";
import styles from "../styles/index.module.scss";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import Smallcard from "../components/Smallcard";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Nav />
			<Carousel />
			<div style={{ backgroundColor: "#F6F9FC" }}>
				<Container>
					<Cardheader
						heading="Flash Deals"
						Iconname={IoFlashSharp}
						iconcolor="rgb(210, 63, 87)"
					/>
				</Container>

				<Container>
					<Card data={Cardhelper} carousel={true} />
				</Container>
				<Container>
					<Cardheader
						heading="Top Categories"
						Iconname={BsFillGridFill}
						iconcolor="rgb(210, 63, 87)"
					/>
				</Container>
				<Categorycard datacard={Categoryhelper} />
				<Container>
					<div className={styles.ratingdiv}>
						<div>
							<Cardheader
								heading="Top Ratings"
								Iconname={GiStarGate}
								iconcolor="rgb(250, 180, 0)"
							/>
							<Ratedcard data={Ratedhelper} />
						</div>
						<div>
							<Cardheader
								heading="Featured Brands"
								Iconname={GiJusticeStar}
								iconcolor="rgb(255, 145, 1)"
							/>
							<Featurecard data={Featurehelper} />
						</div>
					</div>
				</Container>
				<Container>
					<Cardheader
						heading="New Arrival"
						Iconname={MdFiberNew}
						iconcolor="rgb(104, 201, 68)"
					/>
				</Container>

				<Arrivalcard data={Arrivalheler} />
				<Container>
					<Cardheader
						heading="Big Discounts"
						Iconname={GiPresent}
						iconcolor="rgb(210, 63, 87)"
					/>
				</Container>
				<Discountcard data={Discounthelper} />
				<Container>
					<div className={styles.productcard}>
						<div>
							<Sidebar data={Carside} top={false} />
						</div>
						<div style={{ width: "100%" }}>
							<Cardheader heading="Cars" iconcolor="rgb(210, 63, 87)" />
							<Card data={Carhelper} carousel={true} />
						</div>
					</div>
					<div className={styles.productcard}>
						<div>
							<Sidebar data={Mobileside} top={true} />
						</div>
						<div style={{ width: "100%" }}>
							<Cardheader heading="Mobiles" iconcolor="rgb(210, 63, 87)" />
							<Card data={Mobhelper} carousel={true} />
						</div>
					</div>
				</Container>
				<Banner />
				<Container>
					<div className={styles.productcard}>
						<div>
							<Sidebar data={Optickside} top={true} />
						</div>
						<div style={{ width: "100%" }}>
							<Cardheader
								heading="Optics / Watch"
								iconcolor="rgb(210, 63, 87)"
							/>
							<Card data={Opthelper} carousel={true} />
						</div>
					</div>
				</Container>
				<Container>
					<Cardheader
						heading="Categories"
						Iconname={BsFillGridFill}
						iconcolor="rgb(210, 63, 87)"
					/>
				</Container>

				<Smallcard data={SmallHelper} />

				<Container>
					<>
						<Cardheader heading="More For You" iconcolor="rgb(210, 63, 87)" />
						<Card data={Morehelper} carousel={true} />
					</>
				</Container>
				<Servicecard data={Servicehelper} />
				<Footer />
			</div>
		</>
	);
};

export default Home;
