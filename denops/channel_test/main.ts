import { Denops } from "https://deno.land/x/denops_std@v1.5.0/mod.ts";
import * as fn from "https://deno.land/x/denops_std@v1.5.0/function/mod.ts";
import * as path from "https://deno.land/std@0.105.0/path/mod.ts";

export async function main(denops: Denops) {
  denops.dispatcher = {
    async test(): Promise<void> {
      const fname = path.fromFileUrl(new URL("./test.txt", import.meta.url));
      const lines = await fn.readfile(denops, fname) as string[];
      console.log("Receive:", lines.length);
    },
  };
  await denops.cmd(`command! DenopsChannelTest call denops#notify("${denops.name}", "test", [])`);
}
