import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPhoneFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--phoneFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.623 19.302a2.485 2.485 0 011.752.268l6.431 3.544-1.47 2.738a4.498 4.498 0 01-3.902 2.398c-.18.013-.362.013-.543 0a19.34 19.34 0 01-6.71-2.223 19.81 19.81 0 01-8.287-8.452 20.239 20.239 0 01-2.1-6.554 4.568 4.568 0 012.38-4.646l2.222-1.181 3.43 6.431a2.555 2.555 0 01-.717 3.238l-3.334 2.546a17.955 17.955 0 006.545 6.702l2.818-3.841c.359-.494.888-.839 1.485-.968z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M16.875 5.5v1.75a7.875 7.875 0 017.875 7.875h1.75A9.625 9.625 0 0016.875 5.5z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M16.875 9.875v1.75a3.5 3.5 0 013.5 3.5h1.75a5.25 5.25 0 00-5.25-5.25z',
                fill: '#242E30',
            },
        })]);
    },
};
