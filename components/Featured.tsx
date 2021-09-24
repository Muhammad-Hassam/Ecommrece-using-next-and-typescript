import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";
import feature from "../assets/london-britches.png";

const Featurecard = () => {
	return (
		<div className={styles.featurediv}>
			<Container>
				<div className={styles.feature}>
					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={feature} />
						</div>
						<div>
							<h4>London Britches</h4>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Featurecard;
