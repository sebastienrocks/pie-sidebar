import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMealVoucherFilled',
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
            class: 'c-pieIcon c-pieIcon--mealVoucherFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.12 6.932a7.875 7.875 0 01.761-4.313.761.761 0 01.42-.35.647.647 0 01.508.061c.254.149.367.429.411 1.015.114 2.03 0 4.961-.061 6.405h-1.05c0-.481.052-1.146.079-1.908L9.67 7.73a.779.779 0 01-.551-.797zm-3.395-.2V9.75h1.05V6.731c.446-.131.875-.429.875-.927V2.26l-2.853.289v3.255c.035.49.482.787.928.927zm7.963-1.138h-1.103c0 1.636-.061 3.281-.114 4.226a1.321 1.321 0 01-1.312 1.242h-.534a1.75 1.75 0 01-1.75-1.75v-.875H8v.875a1.75 1.75 0 01-1.75 1.75 1.837 1.837 0 01-1.838-1.837V7.527a2.135 2.135 0 01-.874-1.75v-.183H2.313a1.094 1.094 0 00-1.094 1.093v5.25a1.094 1.094 0 001.093 1.094h11.376a1.094 1.094 0 001.093-1.094v-5.25a1.094 1.094 0 00-1.094-1.093z',
                fill: '#242E30',
            },
        })]);
    },
};
