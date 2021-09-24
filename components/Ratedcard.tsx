import styles from "../styles/Card.module.scss";
import Container from "./Container";
import Image from "next/image";
import Camera from "../assets/camera-1.png";
import { AiOutlineStar, AiFillStar } from "react-icons/Ai";

const Ratedcard = () => {
	return (
		<div className={styles.carddiv}>
			<Container>
				<div className={styles.ratedmain}>
					<div className={styles.rated}>
						<div>
							<Image src={Camera} />
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
								<span className={styles.outof}>(20)</span>
							</div>
						</div>
						<div>
							<h4>Camera</h4>
						</div>
						<div className={styles.price}>$3,300</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Ratedcard;
