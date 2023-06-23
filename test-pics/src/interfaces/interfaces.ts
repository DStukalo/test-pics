export interface CommentType {
	body: string;
	id: number;
	postId: number;
	user: {
		id: number;
		username: string;
	};
}
