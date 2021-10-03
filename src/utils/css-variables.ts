export const getPropertyValue = (element: HTMLElement, variableName: string) =>
  window.getComputedStyle(element).getPropertyValue(variableName);
