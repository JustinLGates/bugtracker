import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { profilesService } from "../services/ProfilesService";
import { notesService } from "../services/NotesService";

export class NotesController extends BaseController {
  constructor() {
    super("api/notes");
    this.router
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.find)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async delete(req, res, next) {
    try {
      let data = await notesService.delete(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await notesService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async find(req, res, next) {
    try {
      let data = await notesService.find(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
