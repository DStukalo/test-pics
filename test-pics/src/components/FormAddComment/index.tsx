import { useEffect, useState } from 'react';
import { generateRandomNumber } from '../../helpers/funcGenerateRandomNumber';
import { getValueFromStorage } from '../../helpers/getValueFromStorage';
import styles from './FormAddComment.module.scss';
import { setValueToStorage } from '../../helpers/setValueToStorage';
import type { CommentType } from '../../interfaces/interfaces';
import { baseUrl } from '../consts';

interface Props {
	comments: CommentType[];
	setComments: (arg0: CommentType[]) => void;
	setLoading: (arg0: boolean) => void;
	setError: (arg0: boolean) => void;
}

export function FormAddComment({
	comments, setComments, setLoading, setError,
}: Props) {
	const [textareaValue, setTextareaValue] = useState<string | null>(getValueFromStorage('textareaValue'));

	useEffect(() => {
		const storedValue = getValueFromStorage('textareaValue');
		if (storedValue) {
			setTextareaValue(storedValue);
		}
	}, []);

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = event.target;
		setTextareaValue(value);
		setValueToStorage('textareaValue', value);
	};

	async function createNewComment() {
		const text = textareaValue;
		setValueToStorage('textareaValue', '');
		setLoading(true);
		try {
			const dataFetch = await fetch(`${baseUrl}add`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					body: `${text}`,
					postId: generateRandomNumber(),
					userId: generateRandomNumber(),
				}),
			});
			const newComment: CommentType = await dataFetch.json();
			const newArray = [...comments, newComment];
			setComments(newArray);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}
	const onBtnClick = () => {
		createNewComment();
	};

	return (
		<form className={styles.form}>
			<textarea value={textareaValue || ''} name="addForm" className={styles.area} onChange={handleChange} />
			<button type="button" onClick={onBtnClick} className={styles.btn}>Send</button>
		</form>
	);
}
