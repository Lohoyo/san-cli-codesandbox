/**
 * @file app.js
 */
import {defineComponent, Component as ComponentClass} from 'san';
/**
 *
 * @param {SanComponent} Component san็ component
 * @param {String|DOM} selector attach ็่็น
 */
const hulk = (Component, selector) => {
    const doc = document;
    let app;
    if (Component instanceof ComponentClass) {
        app = Component;
    }
    else {
        const AppComponent = defineComponent(Component);
        app = new AppComponent();
    }
    let $node;
    switch (typeof selector) {
        case 'string':
            $node = doc.querySelector(selector);
            break;
        case 'undefined':
            $node = doc.body;
            break;
        default:
            if (selector.nodeType && selector.nodeName) {
                $node = selector;
            }
            else {
                throw new Error(selector + ' must be an DOM or DOM-selector!');
            }
    }
    app.attach($node);
    return app;
};

export default hulk;
