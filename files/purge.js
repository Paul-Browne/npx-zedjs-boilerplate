import {reset} from "web-build-process";
import {rm} from "fs/promises"
await reset("qwertyuiop");
await rm("public", { recursive: true, force: true });
