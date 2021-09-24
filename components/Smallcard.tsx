import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";
import headphone from "../assets/12.png";

const Smallcard = () => {
	return (
		<div className={styles.smalldiv}>
			<Container>
				<div className={styles.small}>
					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={headphone} />
						</div>
						<div className={styles.text}>Automobile</div>
					</div>

					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={headphone} />
						</div>
						<div className={styles.text}>Automobile</div>
					</div>

					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={headphone} />
						</div>
						<div className={styles.text}>Automobile</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Smallcard;
