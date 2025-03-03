'use strict';

/**
 * partner router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes : [
        {
            method: "GET",
            path: "/partners",
            handler: "partner.findAll",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "GET",
            path: "/partners/:id",
            handler: "partner.findOne",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ]
}
