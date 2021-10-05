import styles from "../styles/nav.module.scss";
import Container from "./Container";
import logo from "../assets/logo.svg";
import {
	AiOutlineSearch,
	AiOutlineUser,
	AiOutlineShopping,
} from "react-icons/Ai";
import { BsFillGridFill } from "react-icons/Bs";
import { MdKeyboardArrowRight } from "react-icons/Md";
import Image from "next/image";

const Nav = () => {
	return (
		<div className={styles.maindiv}>
			<Container>
				<div className={styles.nav}>
					<>
						<div className={styles.searchbar}>
							<div className={styles.container}>
								<div className={styles.logo}>
									<Image src={logo} alt="Logo" />
								</div>
								<div className={styles.searchdiv}>
									<div className={styles.srchicon}>
										<AiOutlineSearch size={22} />
									</div>
									<div className={styles.inputdiv}>
										<input type="text" placeholder="Searching for..." />
									</div>
									<div className={styles.selectdiv}>
										<select>
											<option value="All Categories">All Categories</option>
											<option value="Car">Car</option>
											<option value="Clothes">Clothes</option>
											<option value="Electronics">Electronics</option>
											<option value="Laptop">Laptop</option>
											<option value="Desktop">Desktop</option>
											<option value="Camera">Camera</option>
											<option value="Toys">Toys</option>
										</select>
									</div>
								</div>
								<div className={styles.cartdiv}>
									<AiOutlineUser className={styles.icon} size={30} />
									<AiOutlineShopping className={styles.icon} size={30} />
								</div>
							</div>
						</div>

						<div className={styles.nav}>
							<div className={styles.navbar}>
								<div className={styles.catbar}>
									<div>
										<BsFillGridFill />
									</div>
									<div className={styles.catgspn}>Category</div>
								</div>
								<div>
									<MdKeyboardArrowRight size={20} />
								</div>
							</div>
							<div className={styles.navmain}>
								<ul>
									<li>Home</li>
									<li>Pages</li>
									<li>User Account</li>
									<li>Vendor Account</li>
									<li>Back to Demos</li>
								</ul>
							</div>
						</div>
					</>
				</div>
			</Container>
		</div>
	);
};

export default Nav;
