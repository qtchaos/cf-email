import { encode, decode } from ".";
import type { KeyRange } from "./types";

const email = "john.doe@example.com";
const key = Math.round(Math.random() * 255) as KeyRange;

const encoded = encode(email, key);
const decoded = decode(encoded);

if (decoded === email) {
    console.log(`Test passed! ${email} --[${key}]-> ${encoded} -> ${decoded}`);
} else {
    console.log(`Test failed! ${email} --[${key}]> ${encoded} -> ${decoded}`);
}
