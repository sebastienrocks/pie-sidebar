import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUpload',
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
            class: 'c-pieIcon c-pieIcon--upload',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.926 5.051L5 4.124 7.23 1.875a1.085 1.085 0 011.54 0l2.231 2.223-.927.953-1.418-1.426V9.75H7.344V3.625L5.926 5.051zM11.5 6.47H9.995V7.78H11.5a.219.219 0 01.219.219v5.25a.219.219 0 01-.219.219h-7a.219.219 0 01-.219-.219V8a.219.219 0 01.219-.219h1.505V6.47H4.5A1.54 1.54 0 002.969 8v5.25A1.54 1.54 0 004.5 14.781h7a1.54 1.54 0 001.531-1.531V8A1.54 1.54 0 0011.5 6.469z',
                fill: '#242E30',
            },
        })]);
    },
};
