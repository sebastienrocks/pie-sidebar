import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCloudDownload',
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
            class: 'c-pieIcon c-pieIcon--cloudDownload',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_222_289)',
                fill: '#242E30',
            },
        }, [h('path', {
            attrs: {
                d: 'M13.145 7.431A5.18 5.18 0 002.969 6.75 3.342 3.342 0 001 9.81a3.377 3.377 0 003.378 3.378h.796L3.756 11.77a2.065 2.065 0 01-1.053-3.175c.256-.353.62-.614 1.036-.745l.385-.114.061-.393a3.867 3.867 0 017.683.586v.516l.498.114a1.689 1.689 0 011.313 1.645 1.671 1.671 0 01-1.54 1.654l-1.321 1.33h1.19a2.992 2.992 0 001.128-5.758h.009z',
            },
        }), h('path', {
            attrs: {
                d: 'M10.214 10.091L8.656 11.65V7.125H7.344v4.524L5.786 10.09l-.927.928 2.406 2.397a1.032 1.032 0 001.47 0l2.406-2.397-.927-.928z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_222_289',
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
