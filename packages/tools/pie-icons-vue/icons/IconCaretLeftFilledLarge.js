import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretLeftFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--caretLeftFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23 5.5a1.689 1.689 0 00-.875.271l-14 8.96a1.68 1.68 0 000 2.844l14 8.671c.262.165.565.253.875.254a1.689 1.689 0 001.689-1.68V7.18A1.688 1.688 0 0023 5.5z',
                fill: '#242E30',
            },
        })]);
    },
};
