import { connectToDatabase } from '../../../../backend/lib/mongodb';
import { models } from '../../../../backend/lib/mongodb';

// app/api/users/route.js
export async function GET(request) {
  await connectToDatabase();

  return new Response(JSON.stringify({ message: 'Connected Successfully!'}), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

