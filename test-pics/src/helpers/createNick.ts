export function createNick(str: string) {
	return (str.split(' ').map((el) => el[0].toUpperCase()));
}
