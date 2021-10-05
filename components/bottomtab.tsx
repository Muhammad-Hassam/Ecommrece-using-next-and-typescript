import styles from "../styles/nav.module.scss";
import { FiHome } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { icons } from "react-icons/lib";
const Bottomtab = () => {
	return (
		<div className={styles.bottommain}>
			<div className={styles.bottomtab}>
				<div>
					<div className={styles.icons}>
						<FiHome size={20} />
					</div>
					<a>Home</a>
				</div>
				<div>
					<div className={styles.icons}>
						<BsGrid size={20} />
					</div>

					<a>Category</a>
				</div>
				<div>
					<div className={styles.icons}>
						<AiOutlineShopping size={20} />
					</div>
					<a>Cart</a>
				</div>
				<div>
					<div className={styles.icons}>
						<AiOutlineUser size={20} />
					</div>
					<a>Account</a>
				</div>
			</div>
		</div>
	);
};

export default Bottomtab;
