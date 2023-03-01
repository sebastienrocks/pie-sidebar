import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLei',
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
            class: 'c-pieIcon c-pieIcon--lei',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.978 4.299H4.28v7.096H2.978V4.299zm7.402 4.576a2.4 2.4 0 01-.053.455H6.706A1.26 1.26 0 008 10.363a1.627 1.627 0 001.225-.473l.805.77A2.624 2.624 0 018 11.5a2.484 2.484 0 01-2.625-2.625A2.432 2.432 0 017.869 6.25a2.415 2.415 0 012.511 2.625zm-1.295-.464a1.138 1.138 0 00-1.199-.997 1.12 1.12 0 00-1.19.997h2.389zm2.415 2.984h1.304v-4.97H11.5v4.97zm.648-5.539a.753.753 0 10-.78-.743.736.736 0 00.745.743h.035z',
                fill: '#242E30',
            },
        })]);
    },
};
