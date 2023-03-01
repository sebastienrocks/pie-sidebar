import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLocationRestaurant',
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
            class: 'c-pieIcon c-pieIcon--locationRestaurant',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.727 7.834A3.22 3.22 0 008.194 12.4l2.266 2.302 2.267-2.302a3.246 3.246 0 000-4.567zm-.928 3.649L10.46 12.83l-1.338-1.347a1.943 1.943 0 010-2.722 1.881 1.881 0 012.677 0 1.943 1.943 0 010 2.722zM4.694 5.61a2.284 2.284 0 002.783 0 2.336 2.336 0 001.916.42 2.275 2.275 0 001.067-3.84l-.875-.832A1.251 1.251 0 008.71 1H3.46a1.234 1.234 0 00-.875.35l-.875.875a2.257 2.257 0 00.167 3.43v4.751a.665.665 0 00.656.657h3.552V9.75H3.242V6.075a2.24 2.24 0 001.452-.464zM2.673 3.126l.787-.813h5.198l.875.875a.989.989 0 01.297.708.927.927 0 01-.7.875.971.971 0 01-1.085-.49H6.908a.989.989 0 01-1.645 0H4.125a.945.945 0 01-1.05.447.919.919 0 01-.63-1.27c.053-.125.13-.237.228-.332z',
                fill: '#242E30',
            },
        })]);
    },
};
