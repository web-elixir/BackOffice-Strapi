'use strict';

/**
 * partner controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
    async findAll(ctx) {
        const partners = await strapi.db.query("api::partner.partner").findMany();
        ctx.body = partners;
    },

    async findOne(ctx) {
        const id = ctx.params.id;
        const partners = await strapi.db.query("api::partner.partner").findOne({ id });
        ctx.body = partners;
    }
}
