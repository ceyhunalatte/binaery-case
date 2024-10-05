export async function getProduct(client, id) {
  try {
    const response = await client.get({
      path: `products/${id}`,
    });

    return response.body.product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return false;
  }
}
