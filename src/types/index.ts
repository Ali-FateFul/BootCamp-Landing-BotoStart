import { StaticImageData } from "next/image";

export interface IFeatures {
	id: number;
	header: string;
	description: string;
}

export type TCard = {
	id:number;
	header: string;
	description: string;
};

export type TSeasons = {
	header: string;
	fields: string[];
};
