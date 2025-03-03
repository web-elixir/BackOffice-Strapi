'use strict';

/**
 * offer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
    async find(ctx) {
        const { query } = ctx;
        if (query._q) {
            const search = query._q;
            delete query._q;
            return await strapi.entityService.findMany('api::offer.offer', {
                ...query,
                search,
            });
        }
        return await strapi.entityService.findMany('api::offer.offer', query);
    },

    async findOne(ctx) {
        const id = ctx.params.id;
const { query } = ctx;
if (query._q) {
    const search = query._q;
    delete query._q;
    return await strapi.entityService.findOne('api::offer.offer', id, {
        ...query,
        search,
        populate: '*', // add this line to specify the populate option
    });
}
return await strapi.entityService.findOne('api::offer.offer', id, {
    ...query,
    populate: '*', // add this line to specify the populate option
});
    },
}
