import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";
interface Iprops {
	datacard: {
		itemname: string;
		img: StaticImageData;
		order: string;
	}[];
}

const Categorycard = ({ datacard }: Iprops) => {
	return (
		<div className={styles.main}>
			<Container>
				<div className={styles.category}>
					{datacard?.map((val, ind) => {
						return (
							<div className={styles.card}>
								<div className={styles.cardbtn}>
									<div className={styles.leftbtn}>
										<span>{val.itemname}</span>
									</div>
									<div className={styles.rightbtn}>
										<span>{val.order}</span>
									</div>
								</div>
								<div>
									<Image src={val.img} className={styles.imgdiv} />
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default Categorycard;
