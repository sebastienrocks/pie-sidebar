import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconOfferStarLarge',
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
            class: 'c-pieIcon c-pieIcon--offerStarLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.574 15.186a8.487 8.487 0 01-4.76-4.76.875.875 0 00-1.628 0 8.487 8.487 0 01-4.76 4.76.875.875 0 000 1.628 8.487 8.487 0 014.76 4.76.875.875 0 001.628 0 8.487 8.487 0 014.76-4.76.875.875 0 000-1.628zM16 19.308A10.298 10.298 0 0012.693 16 10.298 10.298 0 0016 12.693 10.298 10.298 0 0019.308 16 10.298 10.298 0 0016 19.308zm11.436-6.3a5.102 5.102 0 01-1.05-1.313 5.433 5.433 0 01-.201-1.75c0-1.111-.052-2.371-.875-3.229-.822-.857-2.117-.875-3.229-.875a5.434 5.434 0 01-1.75-.201 5.1 5.1 0 01-1.312-1.05c-.84-.84-1.768-1.715-3.019-1.715-1.251 0-2.179.875-2.992 1.689-.377.42-.82.775-1.313 1.05-.569.162-1.16.23-1.75.201-1.111 0-2.371.052-3.229.875-.857.822-.875 2.117-.875 3.229.029.59-.04 1.181-.201 1.75a5.1 5.1 0 01-1.05 1.312c-.84.84-1.715 1.768-1.715 3.019 0 1.251.875 2.179 1.689 2.992.42.377.775.82 1.05 1.313.162.569.23 1.16.201 1.75 0 1.111.052 2.371.875 3.229.822.857 2.117.875 3.229.875.59-.029 1.181.04 1.75.201.492.275.936.63 1.312 1.05.814.788 1.75 1.689 2.993 1.689 1.242 0 2.178-.875 2.992-1.689.377-.42.82-.775 1.313-1.05a5.433 5.433 0 011.75-.201c1.111 0 2.371-.053 3.229-.875.857-.823.875-2.118.875-3.229-.029-.59.039-1.181.2-1.75.276-.492.63-.936 1.05-1.313.867-.813 1.742-1.74 1.742-2.992 0-1.251-.875-2.179-1.689-2.992zm-1.26 4.742a6.52 6.52 0 00-1.426 1.881 6.78 6.78 0 00-.332 2.389c0 .823 0 1.671-.394 2.021-.394.35-1.208.377-2.03.394a6.563 6.563 0 00-2.38.332 6.52 6.52 0 00-1.864 1.41c-.604.594-1.234 1.198-1.75 1.198s-1.172-.604-1.75-1.199a6.521 6.521 0 00-1.881-1.426 6.563 6.563 0 00-2.38-.332c-.875 0-1.68 0-2.03-.394-.35-.394-.377-1.199-.394-2.021a6.781 6.781 0 00-.315-2.372 6.52 6.52 0 00-1.426-1.881c-.595-.578-1.199-1.207-1.199-1.75 0-.543.604-1.172 1.199-1.75a6.52 6.52 0 001.426-1.881c.253-.77.365-1.58.332-2.389 0-.822 0-1.671.394-2.021.394-.35 1.208-.377 2.03-.394.8.04 1.601-.067 2.363-.315a6.52 6.52 0 001.881-1.426c.578-.595 1.207-1.199 1.75-1.199.543 0 1.172.604 1.75 1.199a6.52 6.52 0 001.881 1.426c.766.256 1.573.37 2.38.332.832 0 1.68 0 2.03.394.35.394.377 1.199.394 2.022-.036.802.07 1.605.315 2.37.357.71.84 1.347 1.426 1.882.595.604 1.199 1.234 1.199 1.75s-.604 1.172-1.199 1.75z',
                fill: '#242E30',
            },
        })]);
    },
};
