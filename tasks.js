var cronJob = require('cron').CronJob;

// Collect Job every 60 seconds
var collect = require('./tasks/collect');
new cronJob('*/59 * * * * *', collect).start();