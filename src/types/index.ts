import { StaticImageData } from "next/image";

export interface IFeatures {
	id: number;
	header: string;
	description: string;
}

export type TCard = {
	key?: number
	id?:number;
	header: string;
	description: string;
};

export type TSeasons = {
	header: string;
	fields: string[];
};
