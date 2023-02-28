import {
	Misdemeanour,
	MisdemeanourKind,
	MISDEMEANOURS,
} from '../types/misdemeanours.types';

export async function generateMisdemeanours(
	number: number
): Promise<Array<Misdemeanour>> {
	// pretend this is a slow API we're calling, wait 0.75s
	await sleep(750);

	let amount = number ?? 50;

	const misdemeanours: Misdemeanour[] = [];

	for (let i = 0; i < amount; i++) {
		misdemeanours.push({
			citizenId: Math.floor(i + rand(37) * rand(967)),
			misdemeanour: choose<MisdemeanourKind>([...MISDEMEANOURS]),
			date: new Date().toLocaleDateString(),
		});
	}

	return misdemeanours;
}

function rand(x: number): number {
	return Math.random() * x;
}

/// take just one T from an array of T
function choose<T>(arr: Array<T>): T {
	if (!arr) arr = [];
	return arr[Math.floor(Math.random() * arr.length)];
}

// In the real world, you wouldn't want to fake a 'sleep' like this, but for our purposes of faking an API
// this quick-and-dirty solution will do the job.
const sleep = async (milliseconds: number) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
