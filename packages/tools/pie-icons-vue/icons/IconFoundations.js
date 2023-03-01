import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFoundations',
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
            class: 'c-pieIcon c-pieIcon--foundations',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_7066_3748)',
                fill: '#242E30',
            },
        }, [h('path', {
            attrs: {
                d: 'M10.739 1.945H5.252v5.486h5.487V1.945zM9.426 6.119H6.565V3.258h2.861v2.86z',
            },
        }), h('path', {
            attrs: {
                d: 'M1.875 14.169h5.486V8.683H1.875v5.486zm1.313-4.174h2.86v2.861h-2.86V9.995z',
            },
        }), h('path', {
            attrs: {
                d: 'M8.621 8.674v5.486h5.486V8.674H8.622zm4.174 4.174H9.934V9.986h2.861v2.861z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_7066_3748',
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
