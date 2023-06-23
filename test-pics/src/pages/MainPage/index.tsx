import { useEffect, useState } from 'react';
import { CommentCard } from '../../components/CommentCard';
import { FormAddComment } from '../../components/FormAddComment';
import { Layout } from '../../components/Layout';
import { Preloader } from '../../components/Preloader';
import type { CommentType } from '../../interfaces/interfaces';
import styles from './MainPage.module.scss';
import { baseUrl } from '../../components/consts';

export function MainPage() {
	const [comments, setComments] = useState<CommentType[]>();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	async function fetchComments() {
		try {
			const data = await fetch(`${baseUrl}?limit=4`);
			const res = await data.json();
			setComments(res.comments);
		} catch (error) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	}

	async function deleteComment(id: number) {
		setIsLoading(true);
		try {
			await fetch(`${baseUrl}${id}`, {
				method: 'DELETE',
			});
			setComments(comments?.filter((el) => el.id !== id));
		} catch (error) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchComments();
	}, []);

	if (isLoading) {
		return (
			<Layout>
				<Preloader />
			</Layout>
		);
	}
	if (isError) return (<div>Sorry some error</div>);
	if (!comments) return (<div>Sorry don`t data</div>);
	return (
		<Layout>
			<div className={styles.wrapper}>
				{comments?.map((el: CommentType) => (
					<div key={el.id}>
						<CommentCard
							body={el.body}
							user={el.user}
							commentId={el.id}
							funcDelete={() => deleteComment(el.id)}
						/>
					</div>
				))}
				<FormAddComment
					comments={comments}
					setLoading={setIsLoading}
					setComments={setComments}
					setError={setIsError}
				/>
			</div>
		</Layout>
	);
}
