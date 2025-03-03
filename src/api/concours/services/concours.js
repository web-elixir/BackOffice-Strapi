'use strict';

/**
 * concours service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::concours.concours');
