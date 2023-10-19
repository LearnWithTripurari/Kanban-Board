const presets = [];
const plugins = [
    ["@babel/plugin-transform-react-jsx", {
        runtime: "automatic", importSource: "./libs"
    }]
];

module.exports = {
    presets,
    plugins
}

