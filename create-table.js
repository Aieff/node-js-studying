import { sql } from './database.js';

sql`
CREATE TABLE videos (
    id              TEXT PRIMARY KEY,
    title           TEXT,
    description     TEXT,
    duration        INTERGER,
)
`