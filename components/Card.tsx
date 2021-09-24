import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";
import {
	AiFillEye,
	AiOutlineHeart,
	AiOutlineStar,
	AiFillStar,
} from "react-icons/Ai";
import flash from "../assets/flash-1.png";
const Card = () => {
	return (
		<div className={styles.maindiv}>
			<Container>
				<div className={styles.cardmain}>
					<div className={styles.card}>
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
								<Image src={flash} />
							</div>
						</div>
						<div className={styles.bottomdiv}>
							<div>
								<h3>Smart watch black</h3>
							</div>
							<div>
								<AiFillStar size={17} className={styles.fillstars} />
								<AiFillStar size={17} className={styles.fillstars} />
								<AiFillStar size={17} className={styles.fillstars} />
								<AiFillStar size={17} className={styles.fillstars} />
								<AiOutlineStar size={17} className={styles.unfilstars} />
							</div>
							<div className={styles.addcartdiv}>
								<div className={styles.pricediv}>
									<div className={styles.realprice}>$187.50</div>
									<div className={styles.cutprice}>
										<del>250.00</del>
									</div>
								</div>
								<div className={styles.add}>
									<span>+</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Card;
