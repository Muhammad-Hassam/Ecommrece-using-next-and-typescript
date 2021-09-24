import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";
import britch from "../assets/imagegoggles.png";

const Arrivalcard = () => {
	return (
		<div className={styles.arrivaldiv}>
			<Container>
				<div className={styles.arrival}>
					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={britch} />
						</div>
						<div>
							<h4>Sunglass</h4>
						</div>
						<div>
							<span>$30%</span>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={britch} />
						</div>
						<div>
							<h4>Sunglass</h4>
						</div>
						<div>
							<span>$30%</span>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={britch} />
						</div>
						<div>
							<h4>Sunglass</h4>
						</div>
						<div>
							<span>$30%</span>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={britch} />
						</div>
						<div>
							<h4>Sunglass</h4>
						</div>
						<div>
							<span>$30%</span>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={britch} />
						</div>
						<div>
							<h4>Sunglass</h4>
						</div>
						<div>
							<span>$30%</span>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.imgdiv}>
							<Image src={britch} />
						</div>
						<div>
							<h4>Sunglass</h4>
						</div>
						<div>
							<span>$30%</span>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Arrivalcard;
