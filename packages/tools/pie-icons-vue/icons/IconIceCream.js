import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconIceCream',
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
            class: 'c-pieIcon c-pieIcon--iceCream',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.148 7.939v-.875a2.625 2.625 0 00-.98-2.048 1.71 1.71 0 000-.21 3.185 3.185 0 00-6.37 0c0 .206.024.412.07.613a2.188 2.188 0 00-1.024 1.794V8a.604.604 0 00.087.324l3.5 6.125a.657.657 0 001.138 0l3.5-6.125a.604.604 0 00.079-.385zm-6.02-3.176a1.872 1.872 0 013.71-.333h-.22c-.25-.014-.5.01-.743.07l.385 1.251a1.4 1.4 0 01.341 0 1.251 1.251 0 011.216 1.295v.411a18.376 18.376 0 01-5.661-.035v-.21a.998.998 0 011.094-.91.997.997 0 01.359.062l.367-1.252a2.476 2.476 0 00-.726-.122h-.096a1.085 1.085 0 01-.026-.228zM8 12.802L5.734 8.876c.753.076 1.51.108 2.266.096.754.012 1.508-.02 2.258-.096L8 12.804z',
                fill: '#242E30',
            },
        })]);
    },
};
