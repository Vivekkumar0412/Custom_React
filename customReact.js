function customRender(reactElement,container){
    /*
    const elem = document.createElement(reactElement.type);
    elem.setAttribute('href',reactElement.props.href);
    elem.setAttribute('target',reactElement.props.target);
    elem.innerHTML = reactElement.children;
    container.appendChild(elem)
    */
    const elem = document.createElement(reactElement.type);
    elem.innerHTML = reactElement.children;
    for(prop in reactElement.props){
        elem.setAttribute(prop,reactElement.props[prop])
    };
    container.appendChild(elem)
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
        class : 'check'
    },
    children : 'Click me !!!!'
}

const root = document.getElementById("root");
customRender(reactElement,root);
// console.log(root)