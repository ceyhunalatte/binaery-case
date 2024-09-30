export async function getProduct(client, id) {
  try {
    const response = await client.get({
      path: 'products',
      id,
    });

    return response.body.products[0];
  } catch (error) {
    return error;
  }
}
