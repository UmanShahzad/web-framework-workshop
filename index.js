const n = (tag, props, children) => ({
    tag,
    props,
    children,
});

const createElement = (vnode) => {
    const ele = document.createElement(vnode.tag);
    return ele;
}

const vroot = n('div', { id: 'app' }, ['Hello World!']);

document.body.innerHTML = createElement(vroot);

