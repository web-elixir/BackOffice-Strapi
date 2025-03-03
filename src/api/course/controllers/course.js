'use strict';

/**
 * course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
    async findAll(ctx) {
        const courses = await strapi.services.course.find({
            _limit: 1000,
        });
        ctx.body = courses;
    },
    async findOne(ctx) {
        const id = ctx.params.id;
        const course = await strapi.services.course.findOne({ id });
        return course;
    }
}
