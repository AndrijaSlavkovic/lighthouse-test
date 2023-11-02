module.exports = {
    ci: {
        collect: {
            url: ['http://lighthouse-test.local/'],
            // staticDistDir: './wp-content/themes/lighthouse-test',
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};