import { Request } from "https://deno.land/x/oak/request.ts";
import { Response } from "https://deno.land/x/oak/response.ts";

export interface AppContext {
  request: Request;
  response: Response;
}
