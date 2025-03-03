'use strict';

/**
 * reward controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
    async findOne(ctx) {
        const id = ctx.params.id;
        const rewards = await strapi.db.query("api::reward.reward").findOne({ id });
        ctx.body = rewards;
    },
    async findAll(ctx) {
        const rewards = await strapi.db.query("api::reward.reward").findMany();
        ctx.body = rewards;
    },
    async update(ctx) {
        const id = ctx.params.id;
        const rewards = await strapi.db.query("api::reward.reward").update({ id }, ctx.request.body);
        ctx.body = rewards;
    },
    
}
