import { attributes } from "./render";

export function h(nodeName: string, attributes: attributes, ...args: string[]) {
  const children = args.length ? ([] as string[]).concat(...args) : null;
  return { nodeName, attributes, children };
}
