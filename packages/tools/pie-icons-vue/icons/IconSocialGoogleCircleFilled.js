import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialGoogleCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--googleCircleFilled',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_923_545)',
            },
        }, [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M8 1.175A6.781 6.781 0 1014.78 8 6.79 6.79 0 008 1.175zm.078 7.516V7.212l3.675-.052c.044.131.044.262.044.385a4.471 4.471 0 01-.166 1.706 3.5 3.5 0 01-1.461 1.917 3.815 3.815 0 01-1.75.525c-.361.026-.724 0-1.077-.08a3.816 3.816 0 01-1.837-.962A3.5 3.5 0 014.7 9.54a3.693 3.693 0 01-.325-1.02 2.524 2.524 0 01-.06-.468v-.595c.03-.268.092-.533.184-.787a3.824 3.824 0 014.095-2.538 3.5 3.5 0 011.802.762l.228.192-1.103 1.085A2.1 2.1 0 007.93 5.62a2.091 2.091 0 00-1.225.455 2.336 2.336 0 00-.945 1.75c-.018.298.03.597.14.875.085.231.203.45.35.648.315.419.767.716 1.277.84.318.08.648.095.971.043.337-.046.658-.172.937-.367a1.75 1.75 0 00.726-1.085V8.69H8.078z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_923_545',
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
