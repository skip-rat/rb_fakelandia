export const MISDEMEANOURS = [
	'rudeness',
	'vegetables',
	'lift',
	'united',
] as const;

export const MISDEMEANOURS_EMOJIS = [
	'🤪', '🥗', '🗣', '😈'
] as const;

export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const ALL_MISDEMEANOURS = "All";
export const WANT_TO_TALK = "I just want to talk";


export const JUST_TALK = 'just-talk';
//export type JustTalk = typeof JUST_TALK;


export type Misdemeanour = {
	citizenId: number;
	misdemeanour: MisdemeanourKind;
	date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
	punishmentIdeaImageUrl : string;
	confession : string;	
};

/*type TypeA = {
    nameA: Misdemeanour;
};
type TypeB = {
    punishmentIdeaImageUrl : string;	
};
export type TypeC = TypeA & TypeB;*/

export function getMisdemeanourEmoji(type : MisdemeanourKind) : string {
	let index = MISDEMEANOURS.indexOf(type);
	if(index !== undefined) {
		return MISDEMEANOURS_EMOJIS[index];
	} else {
		return "";
	}
}
