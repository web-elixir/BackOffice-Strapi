'use strict';

/**
 * scan-code controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
    async findAll(ctx) {
        const scanCodes = await strapi.db.query("api::scan-code.scan-code").findMany();
        ctx.body = scanCodes;
    },

    async findOne(ctx) {
        const id = ctx.params.id;
        const scanCodes = await strapi.db.query("api::scan-code.scan-code").findOne({ id });
        ctx.body = scanCodes;
    },

    async create(ctx) {
        const scanCode = await strapi.services["scan-code"].create(ctx.request.body);
        ctx.body = scanCode;
    },
}
