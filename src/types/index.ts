
export interface IFeatures {
	id: number;
	header: string;
	description: string;
}

export type TCard = {
	key?: number;
	id?: number;
	header: string;
	description: string;
};

export type TSeasons = {
	id?: number;
	header: string;
	fields: string[];
};

export interface IQuestion {
	id?: number;
	header: string;
	description: string;
}
