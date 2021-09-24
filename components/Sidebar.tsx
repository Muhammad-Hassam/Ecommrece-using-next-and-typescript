import styles from "../styles/Sidebar.module.scss";
import Container from "./Container";
import CrslImg from "../assets/ferrari.png";
import Image from "next/image";

const Sidebar = () => {
	return (
		<div className={styles.maindiv}>
			<Container>
				<div className={styles.sidebar}>
					<div className={styles.insidediv}>
						<div className={styles.imgdiv}>
							<Image src={CrslImg} />
						</div>
						<div>
							<h4>Ferrari</h4>
						</div>
					</div>
					<div style={{ marginTop: "4rem" }}>
						<div className={styles.insidediv}>
							<div className={styles.downdiv}>
								<h4>View All Brands </h4>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Sidebar;
