import { Webview } from "https://deno.land/x/webview@0.7.6/mod.ts";

export class App {
  webview: Webview | null = null;

  constructor(public url: string, public title: string, options?: boolean[]) {
    this.webview = new Webview(...(options || []));

    this.webview.navigate(this.url);
    this.webview.title = this.title;
  }

  run(middleware: (webview: Webview, self: App) => void) {
    this.webview!.run();
    middleware(this.webview!, this);
  }
}
