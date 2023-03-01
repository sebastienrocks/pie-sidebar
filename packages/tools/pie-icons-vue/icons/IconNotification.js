import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNotification',
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
            class: 'c-pieIcon c-pieIcon--notification',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.906 10.354l-.402-.403a4.577 4.577 0 01-1.348-3.255V6.25a4.165 4.165 0 00-1.365-3.08 4.208 4.208 0 00-2.135-1.006V1H7.344v1.164a4.287 4.287 0 00-3.5 4.252v.28a4.576 4.576 0 01-1.348 3.255l-.402.403v1.802h3.089a2.827 2.827 0 005.635 0h3.088v-1.802zM8 13.469a1.532 1.532 0 01-1.514-1.313h3.028A1.531 1.531 0 018 13.47zm2.686-2.625H3.46a5.871 5.871 0 001.697-4.148v-.28a2.958 2.958 0 012.555-2.992 2.844 2.844 0 013.133 2.826v.446a5.872 5.872 0 001.697 4.148h-1.855z',
                fill: '#242E30',
            },
        })]);
    },
};
