import type { KeyRange } from "./types";

/**
 * Decodes an encoded string.
 * @param encoded The encoded string.
 * @returns The decoded string.
 */
export function decode(encoded: string): string {
    let decodedResult = "";
    const key = parseInt(encoded.slice(0, 2), 16);

    for (let i = 2; i < encoded.length; i += 2) {
        const encodedCharCode = encoded.slice(i, i + 2);
        const decodedCharCode = parseInt(encodedCharCode, 16) ^ key;
        decodedResult += String.fromCharCode(decodedCharCode);
    }

    return decodedResult;
}

/**
 * Encodes a string, usually an email using a given key.
 * @param input The string to encode, usually an email.
 * @param key A number between 0 and 255 (type of KeyRange). Generated randomly if not provided.
 * @returns The encoded string.
 */
export function encode(
    input: string,
    key: KeyRange = Math.round(Math.random() * 255) as KeyRange
): string {
    let encodedKey = key.toString(16).padStart(2, "0");

    for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i);
        const encodedCharCode = charCode ^ key;
        encodedKey += encodedCharCode.toString(16).padStart(2, "0");
    }
    return encodedKey;
}
