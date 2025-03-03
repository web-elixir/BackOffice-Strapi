'use strict';

/**
 * institution router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes : [
        {
            method: "GET",
            path: "/institutions",
            handler: "institution.findAll",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "GET",
            path: "/institutions/:id",
            handler: "institution.findOne",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ]
}
