
module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.txt$/,
        use: 'raw-loader'
    });
    return config;
};
