import { randomUUID } from "node:crypto"
import sql from './database.js';

export class DatabasePostgres  {

    async listarVideos(search){

        let videos

        if (search) {
            videos = await sql`SELECT * FROM videos WHERE title ilike ${'%' + search + '%'}` 
        } else {
            videos = await sql`SELECT * FROM videos` 
        }

        return videos
    }

    async createVideos(video){
        const videoId = randomUUID()
        const { title, description, duration } = video

        await sql `INSERT INTO videos (id, title, description, duration) 
        VALUES (${videoId}, ${title}, ${description}, ${duration})`
    }

    async updateVideos(id, video){
        const { title, description, duration } = video

        await sql`UPDATE videos SET title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`
    }

    async deleteVideos(id){
        await sql`DELETE FROM videos WHERE id = ${id}`
    }

}