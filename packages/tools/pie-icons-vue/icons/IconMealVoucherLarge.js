import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMealVoucherLarge',
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
            class: 'c-pieIcon c-pieIcon--mealVoucherLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.07 12.342l.053.132a3.5 3.5 0 002.502 2.056v5.845h1.75v-5.88a3.5 3.5 0 002.354-1.995l.052-.131c0-.07.044-.131.061-.201.056-.182.085-.37.088-.56V5.045l-1.75.875v5.591a1.051 1.051 0 01-.053.289.438.438 0 01-.385.254.437.437 0 01-.437-.438V5.045l-1.75.875v5.705a.446.446 0 01-.438.438.438.438 0 01-.393-.254 1.05 1.05 0 01-.044-.289V5.045l-1.75.875v5.705c0 .19.026.378.079.56-.009.026.044.088.061.157z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M18.205 16.157c.271.062 1.321.245 1.969.36a107.47 107.47 0 01-.228 3.858h1.75c.358-4.699.43-9.415.219-14.123-.114-1.452-.525-1.828-.875-1.995a1.33 1.33 0 00-1.68.543 16.949 16.949 0 00-2.258 9.896 1.453 1.453 0 001.103 1.461zm2.004-9.213c.131 2.362.105 5.25 0 7.805l-1.392-.245a16.415 16.415 0 011.392-7.56z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M27.375 10.75h-3.5v1.75h3.5v11.375H4.625V12.5H7.25v-1.75H4.625a1.75 1.75 0 00-1.75 1.75v11.375a1.75 1.75 0 001.75 1.75h22.75a1.75 1.75 0 001.75-1.75V12.5a1.75 1.75 0 00-1.75-1.75z',
                fill: '#242E30',
            },
        })]);
    },
};
