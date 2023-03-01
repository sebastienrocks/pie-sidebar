import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSaladLarge',
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
            class: 'c-pieIcon c-pieIcon--saladLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.235 16c.338-.321.606-.708.788-1.137a3.237 3.237 0 00-.482-3.238.516.516 0 01-.052-.551c.185-.45.274-.932.262-1.418a3.378 3.378 0 00-1.601-2.669 4.016 4.016 0 00-4.279 0 .875.875 0 01-.796 0 4.156 4.156 0 00-1.444-.21 3.806 3.806 0 00-2.887 1.383A3.351 3.351 0 0016 10.277a.814.814 0 01-.42.64 3.588 3.588 0 00-.123-1.103 3.5 3.5 0 00-2.082-2.302 3.658 3.658 0 00-1.383-.262.63.63 0 01-.542-.228 3.5 3.5 0 00-6.125.657c-.18.444-.27.92-.263 1.4a.691.691 0 01-.27.586 3.5 3.5 0 000 5.731.674.674 0 01.262.569H2.875v2.625a7.875 7.875 0 005.39 7.446l.508 2.214h14.454l.508-2.179a7.875 7.875 0 005.39-7.446V16h-1.89zm-11.008-3.43a2.625 2.625 0 001.523-2.293c.007-.361.136-.71.367-.988a2.047 2.047 0 011.558-.709c.276-.011.552.027.814.114a2.625 2.625 0 002.336-.219 2.222 2.222 0 012.398 0A1.618 1.618 0 0126 9.735c.01.237-.032.472-.122.691a2.25 2.25 0 00.28 2.293 1.488 1.488 0 01.236 1.531 1.9 1.9 0 01-1.339 1.085 2.52 2.52 0 00-1.233.7h-3.107a24.345 24.345 0 003.5-3.876l-1.426-.998a25.01 25.01 0 01-2.021 2.389 5.675 5.675 0 01-.088-1.899l-1.75-.28a6.797 6.797 0 00.438 3.5c-.471.404-.965.781-1.479 1.129h-1.523v-.114a3.499 3.499 0 00-.717-2.905c.17-.165.365-.304.577-.411zM5.78 13.97a1.75 1.75 0 01-.744-1.47 1.75 1.75 0 01.744-1.435 2.415 2.415 0 001.015-2.021c-.007-.244.04-.486.14-.709a1.75 1.75 0 013.071-.315 2.38 2.38 0 002.039.98c.24-.002.477.043.7.131a1.75 1.75 0 011.033 1.146c.113.35.113.727 0 1.077a2.546 2.546 0 00.087 1.942c.114.259.268.498.455.709a1.75 1.75 0 01.402 1.514c0 .087-.043.166-.07.262a1.174 1.174 0 01-.104.21h-1.716c-1.636-2.143-2.082-5.784-2.082-5.827L9 10.365c.099.756.248 1.504.446 2.24a10.013 10.013 0 01-1.592-.796l-.928 1.479a14.002 14.002 0 003.211 1.417c.18.443.384.875.613 1.295H6.795a2.415 2.415 0 00-1.015-2.03zm21.595 4.655a6.125 6.125 0 01-4.594 5.906l-.516.132-.429 1.837H10.164l-.429-1.837-.516-.132a6.125 6.125 0 01-4.594-5.906v-.875h22.75v.875z',
                fill: '#242E30',
            },
        })]);
    },
};
