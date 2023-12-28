import { Webview } from "https://deno.land/x/webview@0.7.6/mod.ts";

export class App {
  webview: Webview | null = null;

  constructor(public url: string, public title: string, options?: any[]) {
    this.webview = new Webview(...(options || []));

    this.webview.navigate(this.url);
    this.webview.title = this.title;
  }

  run(middleware: Function) {
    this.webview!.run();
    middleware(this.webview, this);
  }
}
