import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";

interface Iprops {
	data: [
		{
			img: string;
			product: string;
		},
	];
}

const Smallcard = ({ data }: Iprops) => {
	return (
		<div className={styles.smalldiv}>
			<Container>
				<div className={styles.small}>
					{data.map((val, ind) => {
						return (
							<div className={styles.card}>
								<div className={styles.imgdiv}>
									<Image src={val.img} />
								</div>
								<div className={styles.text}>{val.product}</div>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default Smallcard;
