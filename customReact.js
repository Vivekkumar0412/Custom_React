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
        class : 'check',
        class : 'check2'
    },
    children : 'Click me !!!!'
}

const reactElement2 = {
    type : 'a',
    props : {
        href : 'https://instagram.com',
        target : '_blank',
        class : 'check',
        class : 'check2'
    },
    children : 'Instagram !!!!'
}

const root = document.getElementById("root");
customRender(reactElement,root);
customRender(reactElement2,root);
// console.log(root)