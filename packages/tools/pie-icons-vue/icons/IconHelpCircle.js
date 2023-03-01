import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHelpCircle',
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
            class: 'c-pieIcon c-pieIcon--helpCircle',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.219A6.781 6.781 0 1014.781 8 6.79 6.79 0 008 1.219zm0 12.25A5.469 5.469 0 118 2.53a5.469 5.469 0 010 10.938zm2.047-7.219a2.048 2.048 0 01-1.6 1.908l-.088.717h-.875l-.096-1.426c.822-.096 1.434-.49 1.434-1.138a.761.761 0 00-.874-.744 1.26 1.26 0 00-.876.316L6.32 5.12A2.24 2.24 0 018 4.5a1.811 1.811 0 012.047 1.75zM8.77 10.625a.77.77 0 11-.77-.77.779.779 0 01.77.77z',
                fill: '#242E30',
            },
        })]);
    },
};
