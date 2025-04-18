import clientPromise from '../../lib/mongodb'; // same as your POST file

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio'); 
    const messages = await db.collection('messages').find().sort({ createdAt: -1 }).toArray();

    return Response.json(messages);
  } catch (error) {
    console.error('GET /api/messages error:', error);
    return Response.json({ message: 'Failed to fetch messages' }, { status: 500 });
  }
}
