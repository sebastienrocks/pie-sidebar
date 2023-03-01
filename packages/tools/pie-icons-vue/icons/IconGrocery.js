import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGrocery',
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
            class: 'c-pieIcon c-pieIcon--grocery',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.563 7.536H12.89l.63-2.905-1.137-1.863.122-.56-1.452-.315-.14.63-1.785 1.155L8.83 5.06c-.052 0-.113-.009-.166-.017-.061-.823-.577-1.532-1.304-1.76a1.81 1.81 0 00-1.592.263c-.131.097-.245.21-.341.342-.307-.21-.64-.333-.989-.333a1.465 1.465 0 00-1.138.481c-.595.665-.525 1.304-.437 1.619.035.131.096.254.157.368a.236.236 0 00-.07.06 1.529 1.529 0 00-.507 1.453H1.263V8.85h.595l.91 3.753A1.983 1.983 0 004.7 14.125h6.44c.928 0 1.724-.63 1.934-1.523l.91-3.753h.569V7.536h.009zM8.429 6.338c.831 0 1.522.507 1.75 1.198h-3.5c.227-.691.919-1.198 1.75-1.198zM10.3 4.483l1.147-.735.682 1.12-.577 2.668h-.027a2.973 2.973 0 00-1.443-2.056l.218-.997zm-6.57 2.773c0-.07.025-.14.078-.175.026-.026.07-.052.175-.035.691.105 1.006-.245 1.076-.568.026-.114.105-.692-.7-.928a.444.444 0 01-.236-.262c-.026-.105.026-.228.157-.377a.173.173 0 01.123-.043c.07.008.254.026.472.297.315.385.674.359.823.333.464-.088.647-.534.691-.657a.47.47 0 01.158-.236.51.51 0 01.42-.061c.192.061.385.315.393.674-1.058.367-1.846 1.242-2.02 2.318H4.088c-.28 0-.341-.148-.341-.28H3.73zm8.075 5.031a.684.684 0 01-.665.525h-6.43a.691.691 0 01-.666-.524l-.831-3.44h9.432l-.83 3.44h-.01z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8.963 10.17H7.099v1.313h1.864V10.17z',
                fill: '#242E30',
            },
        })]);
    },
};
