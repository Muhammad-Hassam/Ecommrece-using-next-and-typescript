import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";
import feature from "../assets/london-britches.png";

interface Iprops {
	data: [
		{
			img: string;
			product: string;
		},
	];
}

const Featurecard = ({ data }: Iprops) => {
	return (
		<div className={styles.featurediv}>
			<Container>
				<div className={styles.feature}>
					{data?.map((val, ind) => {
						return (
							<div className={styles.card}>
								<div className={styles.imgdiv}>
									<Image src={val.img} height={460} />
								</div>
								<div>
									<h4>{val.product}</h4>
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default Featurecard;
