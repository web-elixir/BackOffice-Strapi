'use strict';

/**
 *  category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {

    async findAll(ctx) {
        const categories = await strapi.services.category.find({
            _limit: 1000,
        });
        return categories;
    },

    async findOne(ctx) {
        const id = ctx.params.id;
        const category = await strapi.services.category.findOne({ id });
        return category;
    },

    async create(ctx) {
        const category = await strapi.services.category.create(ctx.request.body);
        return category;
    },
}
