'use strict';

/**
 * institution controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
    async findAll(ctx) {
        const institutions = await strapi.db.query("api::institution.institution").findMany();
        ctx.body = institutions;
    },
    async findOne(ctx) {
        const id = ctx.params.id;
        const institutions = await strapi.db.query("api::institution.institution").findOne({ id });
        ctx.body = institutions;
    }
}
