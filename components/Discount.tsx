import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";
import headphone from "../assets/7.png";

const Discountcard = () => {
	return (
		<div className={styles.discountdiv}>
			<Container>
				<div className={styles.discount}>
					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={headphone} />
						</div>
						<div>
							<h4>BenX 2020</h4>
						</div>
						<div>
							<span>$250</span>
							<del>$250</del>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={headphone} />
						</div>
						<div>
							<h4>BenX 2020</h4>
						</div>
						<div>
							<span>$250</span>
							<del>$250</del>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Discountcard;
