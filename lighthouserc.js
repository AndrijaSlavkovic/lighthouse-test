module.exports = {
    ci: {
        collect: {
            url: ['https://oneroute.info/'],
            // staticDistDir: './wp-content/themes/lighthouse-test',
        },
        upload: {
            target: 'filesystem',
            outputDir: './lighthouse-results',
        },
    },
};