'use strict';


// @ts-ignore
const stripe = require('stripe')('sk_test_51M2YMAGtOc9LHRHINcmiBWlasIdwgIsdavQS4avvwL0j52W9tef9L49HXG3Uw9mI441tI7IvAn2knU85NquXE5Vb00oEcaJbPz');

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi})=>({
    async create(ctx){
        const [products] = ctx.request.body;

        const lineItems = await Promise.all(
            products.map(async (product) => {
                const item = await strapi
                .service("api::products.product")
                .findOne(product.id);

                return {
                    price_data: {
                        currency:"aud",
                        product_data: {
                            name:item.title
                        },
                        unit_amount:item.price*100
                    },
                    quantity:item.quantity,
                }
            })  
        );

        try {
            const session = await stripe.checkout.sessions.create({
                
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}?success=true`,
                cancel_url: `${process.env.CLIENT_URL}?cancel=false`,
                line_items: lineItems,
                shipping_address_collectioin:{allowed_countries:["AU"]},
                payment_method_types:["card"],

              });

              await strapi.service("api::order:order").create({
                data:{
                    products,
                    stripeId: session.id,
                }
              })
              return {stripeSession:session}
              
        } catch (error) {
            ctx.response.status = 500;
            return error
        }
    }
}));
