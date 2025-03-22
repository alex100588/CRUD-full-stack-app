import express from "express";
import { create, getAllUsers, getUserById } from "../controller/userController.js"

const route = express.Router()

// Adauga user
route.post("/user", create)
// extrage user din database
route.get('/users', getAllUsers)
// extrage utilizator dupa id
route.get('/user/:id', getUserById)

export default route