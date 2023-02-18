import {
  commands,
  ExtensionContext,
  InputBoxOptions,
  QuickPickOptions,
  Uri,
  window,
} from "vscode";

import { generate } from "./commands";

export const activate = (context: ExtensionContext) => {
  let disposable = commands.registerCommand("skfb-vscode.generate", generate);

  context.subscriptions.push(disposable);
};

// this method is called when your extension is deactivated
const deactivate = () => {};
