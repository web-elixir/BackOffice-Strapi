'use strict';

/**
 * offer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes : [
        {
            method: "GET",
            path: "/offers",
            handler: "offer.find",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "GET",
            path: "/offers/:id",
            handler: "offer.findOne",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ]
}
