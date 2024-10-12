const MyReporter = require('./reporter'); 
const config = {
    retries: 0,
    timeout: 35000,
    reporter: [['./reporter', { customOption: 'some value' }]], 
    use: {
        headless: true,
        viewport: { width: 1920, height: 1080 },
        video: "off",
        screenshot: "only-on-failure",
        trace: 'on'
    },
    projects: [
        {
            name: 'Chrome',
            use: { browserName: 'chromium' }
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' }
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit' }
        },
    ]
};

module.exports = config;