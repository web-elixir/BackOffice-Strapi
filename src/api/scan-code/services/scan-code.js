'use strict';

/**
 * scan-code service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scan-code.scan-code');
