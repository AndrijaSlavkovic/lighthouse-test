module.exports = {
    ci: {
        collect: {
            staticDistDir: './wp-content/themes/lighthouse-test',
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};