'use strict';

/**
 * adress router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes : [
        {
            method: "GET",
            path: "/adresses",
            handler: "adress.findAll",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "GET",
            path: "/adresses/:id",
            handler: "adress.findOne",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ]
}
