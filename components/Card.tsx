import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";
import {
	AiFillEye,
	AiOutlineHeart,
	AiOutlineStar,
	AiFillStar,
} from "react-icons/ai";

interface Iprops {
	data: [
		{
			heading: string;
			img: string;
			price: string;
			del: string;
			stars: string;
		},
	];
	carousel: boolean;
}

const Card = ({ data }: Iprops) => {
	return (
		<div className={styles.maindiv}>
			<div className={styles.cardmain}>
				{data.map((val, ind) => {
					return (
						<div className={styles.card} key={ind}>
							<div className={styles.topdiv}>
								<div className={styles.imghead}>
									<div className={styles.leftdiv}>
										<span>25% off</span>
									</div>
									<div className={styles.rightdiv}>
										<AiFillEye className={styles.eyeicon} />
										<AiOutlineHeart />
									</div>
								</div>
								<div className={styles.image}>
									<Image src={val?.img} />
								</div>
							</div>
							<div className={styles.bottomdiv}>
								<div>
									<h3>{val?.heading}</h3>
								</div>
								{val?.stars === "yellow" ? (
									<div>
										<AiFillStar size={17} className={styles.fillstars} />
										<AiFillStar size={17} className={styles.fillstars} />
										<AiFillStar size={17} className={styles.fillstars} />
										<AiFillStar size={17} className={styles.fillstars} />
										<AiOutlineStar size={17} className={styles.unfilstars} />
									</div>
								) : (
									<div>
										<AiOutlineStar size={17} className={styles.unfilstars} />
										<AiOutlineStar size={17} className={styles.unfilstars} />
										<AiOutlineStar size={17} className={styles.unfilstars} />
										<AiOutlineStar size={17} className={styles.unfilstars} />
										<AiOutlineStar size={17} className={styles.unfilstars} />
									</div>
								)}

								<div className={styles.addcartdiv}>
									<div className={styles.pricediv}>
										<div className={styles.realprice}>{val?.price}</div>
										<div className={styles.cutprice}>
											<del>{val?.del}</del>
										</div>
									</div>
									<div className={styles.add}>
										<span>+</span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
