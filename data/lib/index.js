import express from 'express';
import controller from '../database/index';

// Function that calls expres - Express is running!
const app = express();

const RefreshDatabase = controller();

// Setting up heroku - Dynamic Binding
const PORT = process.env.PORT || 8000;
app.listen(PORT);
