import styles from "../styles/container.module.scss";
import React, { FC, ReactElement } from "react";
type Props = {
	children: any;
};

const Container: FC<Props> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default Container;
