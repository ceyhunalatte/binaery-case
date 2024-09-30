import { shopify } from '@/lib/shopify';
import { getProduct } from '@/lib/getProduct';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const productId = searchParams.get('id') || null;
  if (!productId) return Response.json(400);

  const session = await shopify();
  const product = await getProduct(session, productId);
  if (!product) return Response.json(404);

  return Response.json(product);
}
