const n = (tag, props, children) => ({
    tag,
    props,
    children,
});

const createElement = (vnode) => {
    // TODO
}

const patch = (ele, oldVnode, newVnode) => {
    // TODO
}

const root = n('div', { id: 'app' }, ['Hello World!']);

document.body.innerHTML = createElement(root);

