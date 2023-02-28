import {
	JustTalk,
	JUST_TALK,
	Misdemeanour,
	MisdemeanourKind,
	MISDEMEANOURS,
} from '../types/misdemeanours.types';
import { generateMisdemeanours } from './generate_misdemeanours';

export async function getMisdemeanours(
	amount: number
): Promise<Misdemeanour[]> {
	// in the real world we might call a db here, but we have a function
	// that generates random misdemeanours so that'll do instead
	return await generateMisdemeanours(amount);
}

export type ConfessionInput = {
	subject: string;
	details: string;
	reason: MisdemeanourKind | JustTalk;
};

export function weaklyValidateConfession(body: any) {
	if (!body) return false;

	if (
		!body.reason ||
		!(MISDEMEANOURS.includes(body.reason) || body.reason === JUST_TALK)
	) {
		return false;
	}

	return body.subject !== undefined && body.details !== undefined;
}

export async function handleConfession(confession: ConfessionInput) {
	if (confession.reason === 'just-talk') {
		console.log(
			`🗣️ You just want to talk about ${confession.subject}. Thanks! 💜`
		);
		return {
			success: true,
			justTalked: true,
			message: 'Thanks for talking to us.',
		};
	}

	console.log(`💡 Confession received.`);
	return {
		success: true,
		justTalked: false,
		message: 'Confession received.',
	};
}
