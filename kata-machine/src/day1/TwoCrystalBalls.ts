export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;

    for (; i < breaks.length; i++) {
        if (breaks[i]) {
            break;
        }
    }

    i = i - jmpAmount;

    for (let j = 0; j <= jmpAmount; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
