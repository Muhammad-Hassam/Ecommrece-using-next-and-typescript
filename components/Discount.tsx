import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";

interface Iprops {
	data: {
		img: StaticImageData;
		product: string;
		price: string;
		del: string;
	}[];
}

const Discountcard = ({ data }: Iprops) => {
	return (
		<div className={styles.discountdiv}>
			<Container>
				<div className={styles.discount}>
					{data.map((val, ind) => {
						return (
							<div className={styles.card} key={ind}>
								<div className={styles.imgdiv}>
									<Image src={val.img} />
								</div>
								<div>
									<h4>{val.product}</h4>
								</div>
								<div>
									<span>{val.price}</span>
									<del>{val.del}</del>
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default Discountcard;
