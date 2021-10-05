import styles from "../styles/Sidebar.module.scss";
import Image from "next/image";

interface Iprops {
	data: [
		{
			img: string;
			product: string;
		},
	];
	top: boolean;
}

const Sidebar = ({ data, top }: Iprops) => {
	return (
		<div className={styles.maindiv}>
			<div className={styles.sidebar}>
				{top ? (
					<div className={styles.brands}>
						<h3>Brands</h3>
						<h3 className={styles.light}>|</h3>
						<h3 className={styles.light}>Shops</h3>
					</div>
				) : null}
				{data.map((val, ind) => {
					return (
						<div className={styles.insidediv}>
							<div className={styles.imgdiv}>
								<Image src={val.img} />
							</div>
							<div>
								<h4>{val.product}</h4>
							</div>
						</div>
					);
				})}
				<div style={{ marginTop: "4rem" }}>
					<div className={styles.insidediv}>
						<div className={styles.downdiv}>
							<h4>View All Brands </h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
