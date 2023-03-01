import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPaymentKlarna',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
            },
            class: 'c-pieIcon c-pieIcon--klarna',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.964 7.508H4.051c-1.044 0-1.89.797-1.89 1.782v6.747c0 .984.846 1.782 1.89 1.782h15.913c1.045 0 1.891-.798 1.891-1.782V9.29c0-.985-.846-1.782-1.891-1.782z',
                fill: '#FFB3C7',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M20.01 13.56a.455.455 0 00-.466.443c0 .245.21.444.467.444a.456.456 0 00.466-.444.456.456 0 00-.466-.444zm-1.534-.344c0-.335-.302-.607-.674-.607-.372 0-.673.272-.673.607 0 .336.301.608.673.608.372 0 .674-.272.674-.608zm.002-1.18h.744v2.36h-.744v-.15a1.35 1.35 0 01-.737.216c-.723 0-1.31-.558-1.31-1.246s.587-1.245 1.31-1.245c.274 0 .527.08.737.216v-.151zm-5.949.307v-.307h-.76v2.36h.762v-1.102c0-.371.424-.571.718-.571h.01v-.687c-.303 0-.58.123-.73.307zm-1.895.873c0-.335-.302-.607-.674-.607-.372 0-.673.272-.673.607 0 .336.301.608.673.608.372 0 .674-.272.674-.608zm.002-1.18h.744v2.36h-.744v-.15a1.35 1.35 0 01-.737.216c-.723 0-1.31-.558-1.31-1.246s.587-1.245 1.31-1.245c.274 0 .527.08.737.216v-.151zm4.474-.064c-.296 0-.577.088-.765.33v-.266h-.74v2.36h.749v-1.24c0-.359.253-.535.558-.535.326 0 .514.186.514.53v1.246h.743v-1.502c0-.549-.46-.923-1.059-.923zm-7.604 2.425h.778v-3.413h-.778v3.413zm-3.417 0h.823v-3.414H4.09v3.415zm2.881-3.414a2.65 2.65 0 01-.843 1.938l1.14 1.477H6.248L5.01 12.793l.32-.227a1.93 1.93 0 00.833-1.583h.806z',
                fill: '#0A0B09',
            },
        })]);
    },
};
