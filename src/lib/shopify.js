import '@shopify/shopify-api/adapters/node';
import { shopifyApi } from '@shopify/shopify-api';

export async function shopify() {
  const shopify = shopifyApi({
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
    scopes: ['read_products'],
    hostName: process.env.SHOPIFY_HOST_NAME,
  });

  const client = new shopify.clients.Rest({
    session: {
      shop: 'https://binaery-case.myshopify.com',
      accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    },
  });

  return client;
}
