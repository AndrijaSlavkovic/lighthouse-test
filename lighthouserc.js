module.exports = {
    ci: {
        collect: {
            url: ['https://katiecouric.com/'],
            // staticDistDir: './wp-content/themes/lighthouse-test',
        },
        upload: {
            target: 'filesystem',
            outputDir: './lighthouse-results',
        },
    },
};
