import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";

interface Iprops {
	data: {
		img: StaticImageData;
		product: string;
		price: string;
	}[];
}

const Arrivalcard = ({ data }: Iprops) => {
	return (
		<div className={styles.arrivaldiv}>
			<Container>
				<div className={styles.arrival}>
					{data.map((val, ind) => {
						return (
							<div className={styles.card}>
								<div className={styles.imgdiv}>
									<Image src={val.img} />
								</div>
								<div>
									<h4>{val.product}</h4>
								</div>
								<div>
									<span>{val.price}</span>
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default Arrivalcard;
