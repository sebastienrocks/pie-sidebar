import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRibbonHeartLarge',
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
            class: 'c-pieIcon c-pieIcon--ribbonHeartLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.016 24.4a14.877 14.877 0 01-3.211-4.296c.229-.63.33-1.3.297-1.969-.009-.425.041-.849.15-1.26.211-.362.477-.69.787-.971a3.702 3.702 0 001.382-2.529 3.702 3.702 0 00-1.382-2.485 4.155 4.155 0 01-.788-.971 4.568 4.568 0 01-.149-1.304 3.65 3.65 0 00-.76-2.625 3.693 3.693 0 00-2.626-.761 4.077 4.077 0 01-1.312-.149 4.068 4.068 0 01-.963-.779 3.72 3.72 0 00-2.52-1.426 3.702 3.702 0 00-2.485 1.383 4.096 4.096 0 01-.936.778c-.424.121-.864.171-1.304.149-.954-.1-1.91.173-2.669.761a3.684 3.684 0 00-.76 2.669c.021.44-.029.88-.15 1.304a4.095 4.095 0 01-.778.971 3.701 3.701 0 00-1.418 2.485 3.701 3.701 0 001.383 2.485c.31.295.574.638.778 1.015.121.424.171.864.15 1.304a5.39 5.39 0 00.297 1.969A14.666 14.666 0 014.826 24.4l-1.312 1.225 4.917.814 2.389 3.159.709-.727a21.932 21.932 0 003.596-5.162 2.168 2.168 0 001.663 0 21.755 21.755 0 003.552 5.154l.709.726 2.388-3.159 4.883-.805-1.304-1.225zM10.96 26.868L9.402 24.82l-2.152-.367a16.115 16.115 0 002.126-3.116 6.17 6.17 0 001.75.228c.44-.022.88.028 1.304.149.361.208.689.47.971.779.063.068.13.132.201.192a21.645 21.645 0 01-2.642 4.183zm3.692-5.618a5.057 5.057 0 00-1.513-1.146 5.25 5.25 0 00-1.943-.28c-.577 0-1.242 0-1.461-.254-.219-.254-.236-.875-.254-1.461a5.25 5.25 0 00-.28-1.943 5.058 5.058 0 00-1.146-1.514c-.411-.428-.875-.874-.875-1.268s.472-.875.875-1.269c.475-.43.864-.947 1.146-1.523a5.25 5.25 0 00.28-1.942c0-.578 0-1.234.254-1.461.254-.228.875-.237 1.461-.254a5.25 5.25 0 001.943-.28A5.058 5.058 0 0014.652 5.5c.43-.411.875-.875 1.27-.875.393 0 .83.473 1.26.875.433.472.949.86 1.522 1.146a5.25 5.25 0 001.942.28c.578 0 1.234 0 1.461.254.228.254.237.875.245 1.461-.023.66.075 1.318.29 1.943.28.574.669 1.088 1.145 1.514.412.428.875.874.875 1.268s-.472.875-.875 1.269c-.476.425-.866.94-1.146 1.514a5.4 5.4 0 00-.289 1.942c0 .578 0 1.234-.245 1.461-.245.228-.875.237-1.46.254a5.252 5.252 0 00-1.943.28 5.252 5.252 0 00-1.523 1.164c-.429.411-.875.875-1.26.875s-.796-.473-1.269-.875zm7.78 3.579l-1.55 2.047a21.236 21.236 0 01-2.677-4.182l.201-.193c.28-.307.604-.57.963-.779.426-.12.87-.171 1.312-.148a5.922 5.922 0 001.75-.228 16.462 16.462 0 002.153 3.115l-2.153.368z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M15.921 19.299l-4.375-4.515a3.413 3.413 0 010-4.708 3.282 3.282 0 014.375-.175 3.194 3.194 0 014.375.184 3.395 3.395 0 010 4.699l-4.375 4.515zm-2.109-8.435a1.453 1.453 0 00-1.04.446 1.68 1.68 0 000 2.249l3.15 3.229 3.14-3.23a1.662 1.662 0 000-2.248 1.487 1.487 0 00-2.09 0l-1.086 1.041-1.024-1.041a1.452 1.452 0 00-1.05-.446z',
                fill: '#242E30',
            },
        })]);
    },
};
