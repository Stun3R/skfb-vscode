import { Uri, QuickPickOptions, window, InputBoxOptions } from "vscode";
import { Projects } from "../types";
import { isEmpty } from "../utils";

export const generate = async ({ fsPath }: Uri) => {
  const projectOptions: QuickPickOptions = {
    placeHolder: "For which project this component will be created?",
  };

  const project = await window.showQuickPick(
    [Projects.default, Projects.uikit],
    projectOptions
  );

  /**
   * If no project is selected, we close the prompt
   */
  if (!project) {
    return;
  }

  const componentOptions: InputBoxOptions = {
    prompt: `Component will be created at ${fsPath}`,
    placeHolder: "What is your component name?",
    validateInput: (input: string) =>
      isEmpty(input, "Component's name can not be empty"),
  };

  const component = await window.showInputBox(componentOptions);

  /**
   * If no component's name is given, we close the prompt
   */
  if (!component) {
    return;
  }

  try {
    // TODO: generation logic here
  } catch (error) {
    window.showErrorMessage(
      `Could not create the component ${component}. ${error}`
    );
  }
};
