import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatConversationLarge',
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
            class: 'c-pieIcon c-pieIcon--chatConversationLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.125 17.75V7.25A2.625 2.625 0 0019.5 4.625h-14A2.625 2.625 0 002.875 7.25v16.625h2.266l3.238-3.246c.167-.16.39-.25.621-.254h10.5a2.625 2.625 0 002.625-2.625zm-14.98 1.645l-2.52 2.52V7.25a.875.875 0 01.875-.875h14a.875.875 0 01.875.875v10.5a.875.875 0 01-.875.875H9c-.696 0-1.363.278-1.855.77zm21.98-6.895v16.625H26.85l-3.229-3.246a.92.92 0 00-.621-.254H12.5A2.625 2.625 0 019.875 23v-.875h1.75V23a.875.875 0 00.875.875H23c.688.002 1.35.268 1.846.744l2.529 2.546V12.5a.875.875 0 00-.875-.875h-2.625v-1.75H26.5a2.625 2.625 0 012.625 2.625zm-15.313 0a1.313 1.313 0 11-2.625 0 1.313 1.313 0 012.626 0zm4.376 0a1.313 1.313 0 11-2.626 0 1.313 1.313 0 012.626 0zm-8.75 0a1.313 1.313 0 11-2.626 0 1.313 1.313 0 012.625 0z',
                fill: '#242E30',
            },
        })]);
    },
};
