const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
});
module.exports = {
    publicPath:
        process.env.NODE_ENV === "production"
            ? "/vue/" // If your GitHub Pages URL is https://meko568.github.io/vue/
            : "/", // If you're running locally or using development mode
};
