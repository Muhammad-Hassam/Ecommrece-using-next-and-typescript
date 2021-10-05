import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

interface Iprops {
	data: [
		{
			img: string;
			rated: number;
			productnam: string;
			price: string;
		},
	];
}

const Ratedcard = ({ data }: Iprops) => {
	return (
		<div className={styles.carddiv}>
			<Container>
				<div className={styles.ratedmain}>
					{data?.map((val, ind) => {
						return (
							<div className={styles.rated}>
								<div className={styles.imgdiv}>
									<Image src={val.img} />
								</div>
								<div className={styles.stars}>
									<div>
										<AiFillStar size={15} color={"rgb(250, 175, 0)"} />
										<AiFillStar size={15} color={"rgb(250, 175, 0)"} />
										<AiFillStar size={15} color={"rgb(250, 175, 0)"} />
										<AiFillStar size={15} color={"rgb(250, 175, 0)"} />
										<AiFillStar size={15} color={"rgb(250, 175, 0)"} />
									</div>
									<div>
										<span className={styles.outof}>({val.rated})</span>
									</div>
								</div>
								<div>
									<h4>{val.productnam}</h4>
								</div>
								<div className={styles.price}>{val.price}</div>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default Ratedcard;
