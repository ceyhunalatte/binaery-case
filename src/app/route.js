import path from 'path';
import fs from 'fs';

export async function GET(request, response) {
  var filePath = path.join(process.cwd(), '/website.html');
  const file = fs.readFileSync(filePath);

  return new Response(file, { headers: { 'content-type': 'text/html' } });
}
