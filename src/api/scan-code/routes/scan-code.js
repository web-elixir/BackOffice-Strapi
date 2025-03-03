'use strict';

/**
 * scan-code router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes : [
        {
            method: "GET",
            path: "/scan-codes",
            handler: "scan-code.findAll",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "GET",
            path: "/scan-codes/:id",
            handler: "scan-code.findOne",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "POST",
            path: "/scan-codes",
            handler: "scan-code.create",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ]
}