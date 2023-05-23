import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconNoteLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--noteLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M22.125 23H3.75v1.75h18.375V23Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M28.25 7.25H3.75V9h24.5V7.25Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M28.25 15.125H3.75v1.75h24.5v-1.75Z',
            },
        })]);
    },
};
