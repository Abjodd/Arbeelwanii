// src/app/api/contact/route.js
import clientPromise from '../../lib/mongodb'; // Adjust the path as necessary

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ message: 'All fields are required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('portfolio'); // Replace with your actual DB name

    const result = await db.collection('messages').insertOne({
      name,
      email,
      message,
      createdAt: new Date()
    });

    return Response.json({
      message: 'Message sent successfully',
      id: result.insertedId
    }, { status: 201 });

  } catch (error) {
    console.error("API error:", error);
    return Response.json({
      message: 'Internal Server Error'
    }, { status: 500 });
  }
}
