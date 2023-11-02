module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:36409/'],
            // staticDistDir: './wp-content/themes/lighthouse-test',
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};