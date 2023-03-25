export interface Source {
	id: string;
	name: string;
}
export interface Article {
	source: Source;
	author: string;
	title: string;
	description: string;
	url: URL;
	urlToImage: URL;
	publishedAt: Date;
	content: string;
}
