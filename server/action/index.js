// hack for san-router
global.window = {
    history: {}
};

global.location = {
    pathname: '',
    search: '',
    href: ''
}

import service from '../model/service';
import * as san from 'san';
import * as List from 'san-todo-mvc:src/todo/List.san';

let render;

export default async function (req, res) {
    let ssr = '';
    if (req.query.ssr === '1') {
        if (!render) {
            render = san.compileToRenderer(List);
        }
        const [categories, todos] = await Promise.all([
            service.categories(),
            service.todos()
        ]);
        ssr = render({
            categories,
            todos
        });
    }
    res.render('san-todo-mvc/page/index.tpl', {
        ssr
    });
}