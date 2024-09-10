import { encode, decode } from ".";
import type { KeyRange } from "./types";

const iterations = 5000000;

const email = "john.doe@example.com";
const key = Math.round(Math.random() * 255) as KeyRange;

const encoded = encode(email, key);

console.time("decode");
for (let i = 0; i < iterations; i++) {
    decode(encoded);
}
console.timeEnd("decode");

console.time("encode");
for (let i = 0; i < iterations; i++) {
    encode(email, key);
}
console.timeEnd("encode");
