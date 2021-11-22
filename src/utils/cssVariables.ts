export const GetPropertyValue = (element: HTMLElement, variableName: string) =>
  window.getComputedStyle(element).getPropertyValue(variableName);
