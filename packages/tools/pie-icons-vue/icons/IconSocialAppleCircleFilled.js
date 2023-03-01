import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialAppleCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--appleCircleFilled',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_1611_720)',
            },
        }, [h('path', {
            attrs: {
                d: 'M8 1.175A6.781 6.781 0 1014.78 8 6.79 6.79 0 008 1.175zm0 4.541a1.671 1.671 0 011.312-1.409h.158c.032.267-.013.538-.131.78a1.479 1.479 0 01-1.06.874c-.34.088-.332.096-.28-.245zm3.019 4.034a.47.47 0 000 .096 4.261 4.261 0 01-.954 1.558 1.024 1.024 0 01-1.234.175 1.286 1.286 0 00-1.312 0c-.193.095-.407.14-.622.131a.875.875 0 01-.656-.368 4.541 4.541 0 01-1.26-3.167c.005-.328.074-.652.201-.954a1.75 1.75 0 012.407-.919.928.928 0 00.927 0c.15-.07.305-.13.464-.175a1.943 1.943 0 011.155.123c.287.108.528.312.682.577-.105.097-.21.175-.306.272a2.014 2.014 0 00-.289.323 1.636 1.636 0 00.228 1.917c.15.178.347.311.569.385v.026z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1611_720',
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
