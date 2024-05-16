const n = (tag, props, children) => ({
    tag,
    props,
    children,
});

const createElement = (vnode) => {
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }
  const el = document.createElement(vnode.tag);
  if (vnode.props) {
    Object.entries(vnode.props).forEach(([name, value]) => {
      el[name] = value;
    });
  }
  if (vnode.children) {
    vnode.children.forEach(child => {
      el.appendChild(createElement(child));
    });
  }
  return el;
}

const vroot = n('div', { id: 'app' }, ['Hello World!']);
const root = document.querySelector('#root');
const vrootCreated = createElement(vroot);

console.log(root, vrootCreated);
root.appendChild(vrootCreated);

