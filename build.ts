import { middleware } from "./app.ts";
import { App } from "./index.ts";

const app = new App("https://deno.land", "Deno");

app.run(middleware);