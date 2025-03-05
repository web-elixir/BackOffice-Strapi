const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::partner.partner', ({ strapi }) => ({

    // Trouver tous les partenaires
    async findAll(ctx) {
        try {
            const partners = await strapi.entityService.findMany('api::partner.partner');
            ctx.body = partners;
        } catch (error) {
            ctx.throw(500, 'Erreur lors de la récupération des partenaires');
        }
    },

    // Trouver un partenaire par son ID
    async findOne(ctx) {
        try {
            const { id } = ctx.params;
            const partner = await strapi.entityService.findOne('api::partner.partner', id);

            if (!partner) {
                return ctx.throw(404, 'Partenaire non trouvé');
            }

            ctx.body = partner;
        } catch (error) {
            ctx.throw(500, 'Erreur lors de la récupération du partenaire');
        }
    },

    // Créer un nouveau partenaire
    async create(ctx) {
        try {
            const {
                name, phone, email, description, openHours, offer,
                image, premium, scanCodes, rewards, website, password
            } = ctx.request.body.data;

            // Validation des champs obligatoires
            if (!name || name.length < 3) {
                return ctx.badRequest("Le champ 'name' est obligatoire et doit contenir au moins 3 caractères.");
            }
            if (!phone || !/^\d{10}$/.test(phone)) {
                return ctx.badRequest("Le champ 'phone' doit être un numéro de 10 chiffres.");
            }
            if (!email || !/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
                return ctx.badRequest("Le champ 'email' doit être une adresse email valide.");
            }
            if (!password || password.length < 6) {
                return ctx.badRequest("Le champ 'password' est obligatoire et doit contenir au moins 6 caractères.");
            }

            // Hachage du mot de passe avant de le stocker
            const hashedPassword = await strapi.plugins['users-permissions'].services.user.hashPassword({ password });

            // Création du partenaire
            const newPartner = await strapi.entityService.create('api::partner.partner', {
                data: {
                    name, phone, email, description, openHours, offer,
                    image, premium, scanCodes, rewards, website, password: hashedPassword
                }
            });

            return ctx.send(newPartner);
        } catch (error) {
            console.error("❌ Erreur lors de la création :", error);
            return ctx.throw(500, "Une erreur est survenue lors de la création du partenaire.");
        }
    },

    // Mettre à jour un partenaire
    async update(ctx) {
        try {
            const { id } = ctx.params;
            const partnerData = ctx.request.body.data;

            const partner = await strapi.entityService.update('api::partner.partner', id, {
                data: partnerData,
            });

            if (!partner) {
                return ctx.throw(404, 'Partenaire non trouvé pour la mise à jour');
            }

            ctx.body = partner;
        } catch (error) {
            ctx.throw(500, 'Erreur lors de la mise à jour du partenaire');
        }
    },

    // Supprimer un partenaire
    async delete(ctx) {
        try {
            const { id } = ctx.params;

            const partner = await strapi.entityService.delete('api::partner.partner', id);

            if (!partner) {
                return ctx.throw(404, 'Partenaire non trouvé pour la suppression');
            }

            ctx.body = { message: 'Partenaire supprimé avec succès' };
        } catch (error) {
            ctx.throw(500, 'Erreur lors de la suppression du partenaire');
        }
    },

    // Authentification des partenaires
    async login(ctx) {
        const { pseudo, password } = ctx.request.body;

        // Vérifie que le pseudo et le mot de passe sont fournis
        if (!pseudo || !password) {
            return ctx.badRequest('Pseudo et mot de passe requis');
        }

        // Recherche le partenaire dans la table avec entityService et un filtre
        const partners = await strapi.entityService.findMany('api::partner.partner', {
            filters: { pseudo: { $eq: pseudo } }
        });

        // Vérifie si le partenaire existe
        if (partners.length === 0) {
            return ctx.badRequest('Utilisateur introuvable');
        }

        const partner = partners[0];

        // Utilise le service d'authentification de Strapi pour vérifier le mot de passe
        const isPasswordValid = await strapi.plugins['users-permissions'].services.user.validatePassword(password, partner.password);

        if (!isPasswordValid) {
            return ctx.badRequest('Mot de passe incorrect');
        }

        // Générer un token JWT
        const jwt = strapi.plugins['users-permissions'].services.jwt.issue({ id: partner.id });

        // Renvoie le token JWT et l'ID du partenaire
        ctx.send({ jwt, partnerId: partner.id });
    }

}));
