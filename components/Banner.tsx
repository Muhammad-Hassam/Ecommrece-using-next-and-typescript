import styles from "../styles/Banner.module.scss";
import Container from "./Container";
import Image from "next/image";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";

const Banner = () => {
	return (
		<Container>
			<div className={styles.maindiv}>
				<div>
					<Image src={banner1} height={320} />
				</div>
				<div>
					<Image src={banner2} height={320} width={835} />
				</div>
			</div>
		</Container>
	);
};

export default Banner;
