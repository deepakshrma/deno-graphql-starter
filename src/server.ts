import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Logger, LoggerOptions } from "https://deno.land/x/deno_util/logger.ts";
import init from "./routes/index.ts";

const initialOptions = { level: 0, format: "%s", newLine: true };
const logger = new Logger(initialOptions as LoggerOptions);
const { PORT = 4000 } = config({ safe: true });

const app = new Application();
init(app);

logger.line(`🚀 Server is running on http://localhost:${PORT}/graphql`);
await app.listen({ port: Number(PORT) });
