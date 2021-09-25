import styles from "../styles/Cardheader.module.scss";
import Container from "./Container";

import { IoMdArrowDropright } from "react-icons/Io";

interface iprops {
	heading?: string;
	Iconname?: any;
	iconcolor: string;
}

const Cardheader = ({ heading, Iconname, iconcolor }: iprops) => {
	return (
		<div className={styles.maindiv}>
			<div className={styles.cardhead}>
				<div className={styles.leftdiv}>
					<div className={styles.icondiv}>
						{Iconname ? (
							<Iconname className={styles.icons} color={iconcolor} />
						) : null}
					</div>
					<div>
						<h2>{heading}</h2>
					</div>
				</div>
				<div className={styles.rightdiv}>
					<div>View all</div>
					<div>
						<IoMdArrowDropright size={20} color="gray" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cardheader;
