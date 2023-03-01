import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserAdd',
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
            class: 'c-pieIcon c-pieIcon--userAdd',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_2070)',
            },
        }, [h('path', {
            attrs: {
                d: 'M7.125 7.125a3.062 3.062 0 100-6.125 3.062 3.062 0 000 6.125zm0-4.813a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zm2.861 7.674a2.826 2.826 0 00-1.557-.455H5.804a2.555 2.555 0 00-2.45 1.566l-.455 1.278h-1.4l.639-1.75A3.868 3.868 0 015.82 8.219h2.625a4.182 4.182 0 012.267.656l-.727 1.111zM15 13.031h-1.969V15H11.72v-1.969H9.75V11.72h1.969V9.75h1.312v1.969H15v1.312z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_2070',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
