import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";
import Category from "../assets/category-1.png";

const Categorycard = () => {
	return (
		<div className={styles.main}>
			<Container>
				<div className={styles.category}>
					<div className={styles.card}>
						<div className={styles.cardbtn}>
							<div className={styles.leftbtn}>
								<span>Headphone</span>
							</div>
							<div className={styles.rightbtn}>
								<span>3k orders this week</span>
							</div>
						</div>
						<div>
							<Image src={Category} className={styles.imgdiv} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Categorycard;
