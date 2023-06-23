import styles from './Preloader.module.scss';

export function Preloader() {
	return (
		<div className={styles.main}>
			<div className={styles.spinner}>
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
}
