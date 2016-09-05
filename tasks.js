var CronJob = require('cron').CronJob;

// Collect Job every 60 seconds
var collect = require('./tasks/collect');
new CronJob('*/59 * * * * *', collect).start();
