import styles from "../styles/Card.module.scss";
import Container from "./Container";
import { FaShippingFast } from "react-icons/Fa";
const Servicecard = () => {
	return (
		<div className={styles.servicediv}>
			<Container>
				<div className={styles.service}>
					<div className={styles.insidediv}>
						<div>
							<button>
								<FaShippingFast size={20} />
							</button>
						</div>
						<div>
							<h4>Worldwide Delivery</h4>
						</div>
						<div className={styles.para}>
							<span>
								We offer competitive prices on our 100 million plus product any
								range.
							</span>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Servicecard;
