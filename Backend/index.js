import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import { Blog } from "./models/blog.models.js";
import { Project } from "./models/projects.models.js";
import cors from 'cors';

const app = express();
const port = 3000;

dotenv.config({ path: "./.env" });

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

connectDB();

app.post('/api/v1/project-fetch', async (req, res) => {
    try {
        console.log(req.body);
        const { passw } = req.body;
        if (passw !== process.env.PASSWORD) {
            console.log("Invalid password");
            
            return res.status(401).json({ error: "Invalid password" });
        }

        // Wait for the query to resolve
        const projects = await Project.find();
        console.log(projects);
        
        res.status(200).json({ projects });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});


app.post('/api/v1/project-create', (req, res) => {
    console.log(req.body);
    const { passw } = req.body;
    if (passw !== process.env.PASSWORD) {
        throw new Error("Invalid password");
    }

    const {title, description, git, live} = req.body;
    const project = new Project({ title, description, git, live });
    project.save();
    console.log(project);

    
    res.status(200).json({ message: 'Data received' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
