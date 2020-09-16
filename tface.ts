/*
    AI For Thai T-Face API
    Deno Demo
    https://aiforthai.in.th
    https://www.facebook.com/groups/aiforthai

    NECTEC NSTDA
    17/09/2020

*/

import { Base64 } from "https://deno.land/x/bb64/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const project_id = config().PROJECT_ID;
const api_key = config().API_KEY;

const url = "https://api.aiforthai.in.th/t-face/base64/" + project_id;
const image = "example.jpg";

const b64 = Base64.fromFile(image).toString();

const searchFetch = async (b64: string) => {
  const res = await fetch(url, {
    method: "POST",

    body: JSON.stringify({ image: b64 }),
    headers: {
      "Content-Type": "application/json",
      Apikey: api_key,
    },
  }).catch((error) => {
    console.log(error);
  });

  if (res && res.ok) {
    return res.json();
  } else {
    console.log(`Error: ${res && res.status} ${res && res.statusText}`);
    return {};
  }
};

const res = await searchFetch(b64);
console.log(res);
