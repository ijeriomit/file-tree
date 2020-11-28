export function defaultProp(
  logLevel,
  componentName,
  propName,
  defaultValue = null,
  message = ""
) {
  const consoleMessage = `[${componentName}]: no value was given for "${propName}" property. Default value set to: "${defaultValue}". ${message}`;
  switch (logLevel) {
    case 0:
      console.debug(consoleMessage);
      break;
    case 1:
      console.log(consoleMessage);
      break;
    case 2:
      console.warn(consoleMessage);
      break;
    case 3:
      console.error(consoleMessage);
      break;
  }
  return defaultValue;
}
