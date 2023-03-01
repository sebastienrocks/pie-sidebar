import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEyeOffFilled',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--eyeOffFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.542 5.375l-.928.928-1.251 1.242c.028.15.042.302.044.455A2.424 2.424 0 018 10.406a2.621 2.621 0 01-.455-.043L5.997 11.91l-.49.464A5.25 5.25 0 008 13.031a5.398 5.398 0 004.017-1.82L14.939 8l-2.397-2.625z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M6.793 9.26l.463-.464a1.111 1.111 0 001.514 0A1.068 1.068 0 009.094 8a1.111 1.111 0 00-.298-.744l.464-.463.49-.464.945-.954.945-.945 2.485-2.555h-1.803l-1.75 1.75a5.329 5.329 0 00-4.774-.175c-.692.314-1.31.77-1.814 1.339L1.07 8l2.441 2.686L1 13.25h1.803l2.082-2.082.49-.473.954-.945.464-.49zM5.593 8a2.38 2.38 0 01.71-1.697 2.45 2.45 0 012.222-.63l-.586.577-2.284 2.284A2.179 2.179 0 015.594 8z',
                fill: '#242E30',
            },
        })]);
    },
};
