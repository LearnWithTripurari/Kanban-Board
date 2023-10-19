const presets = ["@babel/preset-env"];
const plugins = [
    ["@babel/plugin-transform-react-jsx", {
        runtime: "automatic", importSource: "./libs"
    }]
];

module.exports = {
    presets,
    plugins
}

