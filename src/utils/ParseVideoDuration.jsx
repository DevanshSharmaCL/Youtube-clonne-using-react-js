export const parseVideoDuration = (duration) => {
    // Remove 'PT' and split by H, M, S into parts
    const durationParts = duration
        .replace('PT', '')
        .replace('H', ':')
        .replace('M', ':')
        .replace('S', '')
        .split(':');

    // Pad numbers less than 10 with a leading zero
    const pad = (num) => (num < 10 ? `0${num}` : num);

    // Handle different duration formats
    if (durationParts.length === 3) {
        // Hours, Minutes, Seconds (e.g., PT5H30M45S -> 5:30:45)
        return `${durationParts[0]}:${pad(durationParts[1])}:${pad(durationParts[2])}`;
    }
    if (durationParts.length === 2) {
        // Minutes, Seconds (e.g., PT5M30S -> 5:30)
        return `${pad(durationParts[0])}:${pad(durationParts[1])}`;
    }
    if (durationParts.length === 1) {
        // Seconds only (e.g., PT45S -> 0:45)
        return `0:${pad(durationParts[0])}`;
    }

    // Fallback for invalid or unexpected formats
    return '0:00';
};