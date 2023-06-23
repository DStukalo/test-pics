import { createNick } from '../../helpers/createNick';
import { SVGWrapper } from '../SVGWrapper';
import styles from './CommentCard.module.scss';

interface Props {
	body: string;
	commentId: number;
	user: {
		id: number;
		username: string;
	};
	funcDelete: (arg1: number) => void;
}

export function CommentCard({
	body, user, commentId, funcDelete,
}: Props) {
	const btnOnClickHandler = () => {
		funcDelete(commentId);
	};
	const nick = createNick(user.username);
	return (
		<div className={styles.card}>
			<div className={styles.user}>
				<div className={styles.user_avatar}>
					{nick}
				</div>
				<div className={styles.user_username}>
					{user.username}
				</div>
			</div>
			<button
				type="button"
				className={styles.card_btn}
				onClick={btnOnClickHandler}
			>
				<SVGWrapper
					file="icons"
					id="close_icon"
					classes="close_btn"
				/>
			</button>
			<p className={styles.card_text}>{body}</p>
		</div>
	);
}
