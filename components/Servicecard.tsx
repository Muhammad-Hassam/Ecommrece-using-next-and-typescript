import styles from "../styles/Card.module.scss";
import Container from "./Container";
import { FaShippingFast } from "react-icons/Fa";

interface Iprops {
	data: [
		{
			icon: any;
			title: string;
			description: string;
		},
	];
}

const Servicecard = ({ data }: Iprops) => {
	return (
		<div className={styles.servicediv}>
			<Container>
				<div className={styles.service}>
					{data.map((val, ind) => {
						return (
							<div className={styles.insidediv}>
								<div>
									<button>
										<val.icon size={20} />
									</button>
								</div>
								<div>
									<h4>{val.title}</h4>
								</div>
								<div className={styles.para}>
									<span>{val.description}</span>
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default Servicecard;
