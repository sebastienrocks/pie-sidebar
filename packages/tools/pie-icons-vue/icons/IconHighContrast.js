import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHighContrast',
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
            class: 'c-pieIcon c-pieIcon--highContrast',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_3104_5201)',
                fill: '#242E30',
            },
        }, [h('path', {
            attrs: {
                d: 'M8 1.219C4.264 1.219 1.219 4.264 1.219 8c0 3.736 3.045 6.781 6.781 6.781 3.736 0 6.781-3.045 6.781-6.781 0-3.736-3.045-6.781-6.781-6.781zm0 12.25A5.476 5.476 0 012.531 8c0-3.01 2.45-5.478 5.469-5.478a5.476 5.476 0 015.469 5.47A5.482 5.482 0 018 13.46v.009z',
            },
        }), h('path', {
            attrs: {
                d: 'M3.844 8A4.16 4.16 0 008 12.156V3.835a4.16 4.16 0 00-4.156 4.156V8z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_3104_5201',
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
