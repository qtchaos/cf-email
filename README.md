# cf-email

Easily decode Cloudflare Scrape Shield protected email addresses.

## Usage

```typescript
import { decode } from "cf-email";

const obfuscatedEmail = "006a6f686e2e646f65406578616d706c652e636f6d";
const email = decode(obfuscatedEmail);
email === "john.doe@example.com";
```

```typescript
import { encode } from "cf-email";
import { KeyRange } from "cf-email/types";

const email = "john.doe@example.com";

// When generating a random value we need to use the KeyRange type.
const key = Math.round(Math.random() * 255) as KeyRange;
// Else we can just use a number between 0 and 255.
const key = 80;

const obfuscatedEmail = encode(email, key);
obfuscatedEmail === "503a3f383e7e343f35103528313d203c357e333f3d";
```
