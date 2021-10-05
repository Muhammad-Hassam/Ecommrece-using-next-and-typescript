import styles from "../styles/Footer.module.scss";
import Container from "./Container";
import Image from "next/image";
import logo from "../assets/logo (1).svg";
import playstore from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
import React, { useState } from "react";
import { SiFacebook } from "react-icons/si";
import {
	AiFillTwitterCircle,
	AiOutlineYoutube,
	AiFillGoogleCircle,
	AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
	const [about, setabout] = useState<string[]>([
		"Careers",
		"Our stories",
		"Our Cares",
		"Terms & Condition",
		"Privacy policy",
	]);
	const [customer, setcostumer] = useState<string[]>([
		"Help Center",
		"How to Buy",
		"Track Ypur Order",
		"Corporatre and Bulk Purchasing",
		"Returns and Refunds",
	]);

	const [icons, seticons] = useState<any[]>([
		SiFacebook,
		AiFillTwitterCircle,
		AiOutlineYoutube,
		AiFillGoogleCircle,
		AiOutlineInstagram,
	]);

	return (
		<footer>
			<div className={styles.maindiv}>
				<Container>
					<div className={styles.insidediv}>
						<div>
							<Image src={logo} className={styles.img} />
							<div className={styles.para}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
								libero id et, in gravida. Sit diam duis mauris nulla cursus.
								Erat et lectus vel ut sollicitudin elit at amet.
							</div>
							<Image src={playstore} />
							<Image src={appstore} />
						</div>
						<div>
							<h3>About Us</h3>
							{about.map((val, ind) => {
								return <a>{val}</a>;
							})}
						</div>
						<div>
							<h3>Customer Care</h3>
							{customer.map((val, ind) => {
								return <a>{val}</a>;
							})}
						</div>
						<div>
							<h3>Contact Us</h3>
							<div className={styles.contact}>
								70 Washington Square South, New York, NY 10012, United States
							</div>
							<div className={styles.contact}>Email: uilib.help@gmail.com</div>
							<div className={styles.contact}>Phone: +1 1123 456 780</div>
							<div className={styles.icondiv}>
								{icons.map((Val, ind) => {
									return (
										<a>
											<Val />
										</a>
									);
								})}
							</div>
						</div>
					</div>
				</Container>
			</div>
		</footer>
	);
};
export default Footer;
