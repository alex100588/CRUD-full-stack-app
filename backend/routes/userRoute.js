import express from "express";
import { create, deleteUser, getAllUsers, getUserById, update } from "../controller/userController.js"

const route = express.Router()

// Adauga user
route.post("/user", create)
// extrage user din database
route.get('/users', getAllUsers)
// extrage utilizator dupa id
route.get('/user/:id', getUserById)
// update
route.put('/update/user/:id', update)
// delete
route.delete('/delete/user/:id', deleteUser)

export default route