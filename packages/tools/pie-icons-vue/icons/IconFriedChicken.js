import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFriedChicken',
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
            class: 'c-pieIcon c-pieIcon--friedChicken',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_757)',
            },
        }, [h('path', {
            attrs: {
                d: 'M4.29 4.412a2.625 2.625 0 01-.438-1.277 1.444 1.444 0 01.648-1.26c.062.367.183.722.359 1.05.148.245.332.438.577.875.13.231.218.483.263.744.043.299-.006.604-.14.875A1.75 1.75 0 014.5 6.25c0-.481.105-.875.07-1.155a1.549 1.549 0 00-.28-.683zm2.905-.874v.936a1.391 1.391 0 00.875-.709c.1-.216.14-.455.114-.691A2.004 2.004 0 008 2.487c-.21-.315-.341-.472-.473-.656A2.844 2.844 0 017.17 1a1.146 1.146 0 00-.552 1.015c.024.372.145.73.35 1.041.109.153.186.325.228.508v-.026zm7.752 5.425a3.58 3.58 0 01-2.327 3.29c-.534.997-1.995 2.152-4.524 1.268-2.721-.936-3.272-.498-3.666.114-.394.613-.805 1.199-1.374 1.199a1.251 1.251 0 01-.639-.201 1.225 1.225 0 01-.542-1.287 1.4 1.4 0 000-.525 2.24 2.24 0 00-.411-.673 1.286 1.286 0 01-.289-1.523A1.067 1.067 0 012.75 10.1a1.513 1.513 0 001.321 0c.508-.201.875-.875 1.216-1.636.525-1.059 1.164-2.363 2.625-2.582a4.375 4.375 0 012.783-1.224 3.5 3.5 0 012.494 1.172 3.159 3.159 0 011.758 3.133zm-1.312 0c0-1.567-.875-1.917-1.015-1.943l-.166-.061-.132-.131a2.24 2.24 0 00-1.636-.876 3.229 3.229 0 00-2.012.998l-.184.175h-.263c-.813.053-1.216.744-1.75 1.881a4.12 4.12 0 01-1.89 2.275 2.8 2.8 0 01-2.003.114c.216.265.393.56.525.875.098.245.146.507.14.77l.105-.166c1.032-1.601 2.817-1.374 5.171-.595 2.354.778 2.975-.726 2.975-.779l.114-.297.315-.097a2.337 2.337 0 001.706-2.143z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_757',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
