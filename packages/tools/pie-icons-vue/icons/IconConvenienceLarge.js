import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconConvenienceLarge',
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
            class: 'c-pieIcon c-pieIcon--convenienceLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.623 25.905l-1.41-12.81h-1.662V9.289H16.9v-.28a2.905 2.905 0 00-2.774-2.897V2.875h-1.75v3.237c-1.54.08-2.774 1.34-2.774 2.897v4.077H7.825l-1.409 12.81a2.914 2.914 0 00.727 2.258 2.91 2.91 0 002.16.962h13.415c.822 0 1.61-.35 2.16-.971a2.914 2.914 0 00.727-2.258l.018.018zM20.8 11.039v2.056H16.9v-2.056H20.8zm-9.45-2.03c0-.639.525-1.164 1.164-1.164h1.47c.639 0 1.164.525 1.164 1.164v4.077H11.36V9.01h-.009zM23.593 26.99a1.141 1.141 0 01-.858.385H9.321c-.332 0-.638-.14-.857-.385a1.163 1.163 0 01-.289-.901l1.243-11.253h13.238L23.89 26.09c.035.332-.07.647-.289.901h-.008z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M15.998 19.561a2.087 2.087 0 01-2.083-2.082h-1.75a3.831 3.831 0 107.665 0h-1.75a2.087 2.087 0 01-2.082 2.082z',
                fill: '#242E30',
            },
        })]);
    },
};
