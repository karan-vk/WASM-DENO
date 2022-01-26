import { serve } from "https://deno.land/std@0.122.0/http/server.ts";
import { get_wise_saying } from "./wisesayings.js";

let port = 4040;

const handler = (): Response => {
  const body: string = get_wise_saying() + "\n" + Deno.env.get("DENO_REGION");

  return new Response(body, { status: 200 });
};
await serve(handler, { port });
