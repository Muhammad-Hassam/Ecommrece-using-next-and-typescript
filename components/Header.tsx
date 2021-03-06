import styles from "../styles/Header.module.scss";
import Container from "./Container";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import logo from "../assets/logo.svg";
import Image from "next/image";

const Header = () => {
	return (
		<div className={styles.header}>
			<Container>
				<div className={styles.backclr}>
					<div className={styles.sides_space}>
						<div className={styles.logo}>
							<Image src={logo} alt="Logo" />
						</div>
						<p>
							<FiPhone className={styles.icons} size={18} />
							<span>+88012 3456 7894</span>
						</p>
						<p>
							<AiOutlineMail className={styles.icons} size={18} />
							<span>support@ui-lib.com</span>
						</p>
					</div>
					<div className={styles.sides_space}>
						<p>Theme FAQs</p>
						<p>Need Help?</p>
						<select>
							<option value="EN">EN</option>
							<option value="BN">BN</option>
							<option value="HN">HN</option>
						</select>
						<select>
							<option value="USD">USD</option>
							<option value="EUR">EUR</option>
							<option value="BDT">BDT</option>
							<option value="INR">INR</option>
						</select>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Header;
