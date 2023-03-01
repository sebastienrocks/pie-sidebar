import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDish',
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
            class: 'c-pieIcon c-pieIcon--dish',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.469 8a4.603 4.603 0 00-4.594-4.594V2.094A5.906 5.906 0 116.25 13.25v-1.496c.762.558 1.68.864 2.625.875A4.603 4.603 0 0013.469 8zM3.188 6.801a.665.665 0 00.656-.656v-3.64l1.295-.63v4.27a.656.656 0 101.312 0v-3.64l1.313-.63v6.352a3.08 3.08 0 01-2.625 2.87v3.028H3.844v-3.027a3.08 3.08 0 01-2.625-2.87V2.61l1.312-.639v4.174a.665.665 0 00.656.656zm0 1.313A2.074 2.074 0 012.53 8v.236c0 1.164 1.391 1.636 1.969 1.636.577 0 1.969-.472 1.969-1.636V8c-.211.076-.433.117-.657.123A1.951 1.951 0 014.5 7.598c-.358.33-.826.513-1.313.516z',
                fill: '#242E30',
            },
        })]);
    },
};
