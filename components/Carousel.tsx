import styles from "../styles/Carousel.module.scss";
import Container from "./Container";
import CrslImg from "../assets/nike-black.png";
import Image from "next/image";

const Carousel = () => {
	return (
		<div className={styles.maindiv}>
			<Container>
				<div className={styles.carousel}>
					<div className={styles.leftdiv}>
						<h1>50% Off For Your First Shopping</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							lobortis consequat eu, quam etiam at quis ut convalliss.
						</p>
						<button>Shop Now</button>
					</div>
					<div className={styles.rightdiv}>
						<Image src={CrslImg} alt="slider" className={styles.img} />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Carousel;
