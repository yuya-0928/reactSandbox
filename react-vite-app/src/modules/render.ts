export interface attributes {
  [key: string]: string;
}

export function render(
  vnode:
    | {
        nodeName: string;
        attributes: attributes;
        children: string[] | null;
      }
    | string
) {
  // Strings just convert to #text Nodes:
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  if (typeof vnode === "undefined" || vnode === null) {
    return document.createTextNode("");
  }

  //create a DOM element with the nodeName of our VDOM element:
  const n = document.createElement(vnode.nodeName);

  // copy attributes onto the new node:
  const a = vnode.attributes || {};
  Object.keys(a).forEach((k) => n.setAttribute(k, a[k]));

  // render (build) and then append children:
  (vnode.children || []).forEach((c) => n.appendChild(render(c)));

  return n;
}
