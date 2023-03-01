import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRoutePin',
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
            class: 'c-pieIcon c-pieIcon--routePin',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.031 2.575a4.646 4.646 0 00-6.562 0 4.655 4.655 0 000 6.571l3.281 3.281 3.281-3.28a4.655 4.655 0 000-6.572zm-.927 5.644L9.75 10.573 7.396 8.218a3.325 3.325 0 114.708 0zm-1.076-2.442a1.277 1.277 0 11-2.555 0 1.277 1.277 0 012.554 0zm-6.738 7.7l6.344.053v1.313L4.29 14.79a1.523 1.523 0 01-1.295-2.319l1.041-1.75a.21.21 0 000-.219.21.21 0 00-.192-.113H1V9.094h2.826a1.522 1.522 0 011.313 2.319l-1.042 1.75a.219.219 0 00.193.332v-.018z',
                fill: '#242E30',
            },
        })]);
    },
};
