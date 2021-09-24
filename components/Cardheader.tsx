import styles from "../styles/Cardheader.module.scss";
import Container from "./Container";
import { IoFlash } from "react-icons/Io5";
import { IoMdArrowDropright } from "react-icons/Io";

interface iprops {
	heading: string;
}

const Cardheader = (props: iprops) => {
	return (
		<div className={styles.maindiv}>
			<Container>
				<div className={styles.cardhead}>
					<div className={styles.leftdiv}>
						<div className={styles.icondiv}>
							<IoFlash className={styles.icons} />
						</div>
						<div>
							<h2>{props.heading}</h2>
						</div>
					</div>
					<div className={styles.rightdiv}>
						<div>View all</div>
						<div>
							<IoMdArrowDropright size={20} color="gray" />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Cardheader;
