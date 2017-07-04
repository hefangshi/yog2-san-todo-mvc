/**
 * @file FIS编译配置
 */

/* global fis */

// fis3-enable

// 模块名设置
fis.set('namespace', 'san-todo-mvc');

// 设置需要发布的文件
fis.set('project.files', ['server/**', 'client/page/**', 'client/third-party/**']);
fis.set('project.ignore', ['node_modules', 'output']);

// 设置语言支持
fis.enableES7();
fis.enableNPM({
    autoPack: true
});
fis.match('client/src/**.js', {
    parser: fis.plugin('babel-6.x')
});

// 启用SAN组件支持
fis.set('project.fileType.text', 'san');
fis.hook('commonjs', {
    extList: ['.js', '.san']
});
fis.match('client/src/{**.js,**.san}', {
    isMod: true
});
fis.match('client/**.san', {
    parser: [fis.plugin('san-component'), fis.plugin('babel-6.x')],
    rExt: '.js'
});

// 发布设置
fis.media('debug').match('*', {
    useHash: false,
    optimizer: null,
    deploy: fis.plugin('http-push', {
        receiver: 'http://127.0.0.1:8085/yog/upload',
        to: '/'
    })
});

const uglifyOpt = {
    output: {
        comments: function (that, comment) {
            return comment.type == "comment2" && /@preserve|@license|@cc_on|Copyright/i.test(comment.value);
        }
    }
}

fis.media('debug-prod').hook('commonjs', {
    paths: {
        san: '/client/node_modules/san/dist/san.js'
    },
    extList: ['.js', '.san']
}).match('/client/node_modules/**.js', {
    optimizer: fis.plugin('uglify-js', uglifyOpt)
}).match('/client/src/{**.js,**.san}', {
    optimizer: fis.plugin('uglify-js', uglifyOpt),
    packTo: '/client/pkg/app.js'
}).match('/client/src/**.css', {
    packTo: '/client/pkg/app.css'
}).match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://127.0.0.1:8085/yog/upload',
        to: '/'
    })
});