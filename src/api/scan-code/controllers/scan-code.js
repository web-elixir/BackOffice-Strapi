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
        const { partner, scanDate, url } = ctx.request.body.data;

        const scanCode = await strapi.services["api::scan-code.scan-code"].create({
            data: {
                partner,
                scanDate,
                url
            },
        });

        ctx.body = scanCode;
    },
}
