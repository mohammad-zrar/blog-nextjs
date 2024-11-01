import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        const {email, name, message} = req.body;

        if(!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {

            res.status(422).json({message: 'Invalid input.'});
            return;
        }

        // Store it in a database
        const newMessage: any = {
            email,
            name, 
            message
        }

        let client;

        try{
             client = await MongoClient.connect('mongodb://localhost:27017/')
        } catch(err) {

            res.status(500).json({message: 'Internal server error'})
            return;
        }
        
        const db = client.db('blog-nextjs');

        try{
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch(err) {
            client.close();
            res.status(500).json({message: 'Storing message failed'})
            return;
        }
        

        client.close();

        res.status(201).json({message: 'Successfully stored message!', data: newMessage})
    }
}