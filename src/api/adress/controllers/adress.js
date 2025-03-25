'use strict';

/**
 * adress controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
    async findAll(ctx) {
        const adresses = await strapi.db.query("api::adress.adress").findMany();
        ctx.body = adresses;
    },
    async findOne(ctx) {
        const id = ctx.params.id;
        const adress = await strapi.entityService.findOne('api::adress.adress', id, {
            populate: {
                partner: true
            }
        });
        ctx.body = adress;
    }
};