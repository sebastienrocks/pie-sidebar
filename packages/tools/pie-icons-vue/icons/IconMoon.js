import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMoon',
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
            class: 'c-pieIcon c-pieIcon--moon',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.219 8a4.174 4.174 0 013.412-4.078 5.249 5.249 0 00-1.444-.927A5.39 5.39 0 008 2.531 5.469 5.469 0 008 13.47a5.39 5.39 0 002.188-.464 5.248 5.248 0 001.443-.928A4.174 4.174 0 018.22 8zM8 12.156a4.155 4.155 0 01-3.689-6.18 4.156 4.156 0 014.433-2.054 5.443 5.443 0 000 8.155 4.12 4.12 0 01-.744.08z',
                fill: '#242E30',
            },
        })]);
    },
};
