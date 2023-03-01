import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLaptop',
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
            class: 'c-pieIcon c-pieIcon--laptop',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.031 9.549V4.5A1.54 1.54 0 0011.5 2.969h-7A1.54 1.54 0 002.969 4.5v5.049l-1.75 2.625v.201a1.54 1.54 0 001.531 1.531h10.5a1.54 1.54 0 001.531-1.531v-.201l-1.75-2.625zM4.281 4.5a.219.219 0 01.219-.219h7a.219.219 0 01.219.219v4.594H4.28V4.5zm8.969 8.094H9.566l-.315-.718H6.75l-.315.718H2.75a.229.229 0 01-.175-.088l1.4-2.1h8.05l1.4 2.1a.228.228 0 01-.175.088z',
                fill: '#242E30',
            },
        })]);
    },
};
