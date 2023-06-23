import styles from './Layout.module.scss';

interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<main className={styles.main}>
			{ children }
		</main>
	);
}
