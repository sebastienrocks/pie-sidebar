import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBallotBoxLarge',
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
            class: 'c-pieIcon c-pieIcon--ballotBoxLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.855 7.53l1.286 1.19L16 12.115a1.189 1.189 0 01-1.35.286 1.217 1.217 0 01-.4-.277l-1.26-1.374 1.304-1.164.831.893 2.73-2.949zm-7.98 6.72V3.75h7.875a4.375 4.375 0 014.375 4.375v6.125h1.75V16H8.125v-1.75h1.75zm1.75 0h8.75V8.125A2.625 2.625 0 0017.75 5.5h-6.125v8.75zM28.25 9v18.375H3.75V9h4.375v1.75H5.5v8.75h21v-8.75h-2.625V9h4.375zM26.5 25.625V21.25h-21v4.375h21z',
                fill: '#242E30',
            },
        })]);
    },
};
