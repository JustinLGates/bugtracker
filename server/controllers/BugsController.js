import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { profilesService } from "../services/ProfilesService";
import { bugsService } from "../services/BugsService";
import { notesService } from "../services/NotesService";
export class BugsController extends BaseController {
  constructor() {
    super("api/bugs");
    this.router
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("/:id/notes", this.getNotes)
      .get("", this.find)
      .get("/:id", this.findById)
      .post("/:id/notes", this.createNote)
      .post("", this.create)
      .delete("/:id", this.archive)
      .put("/:id", this.edit);
  }
  async createNote(req, res, next) {
    try {
      let data = await notesService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getNotes(req, res, next) {
    try {
      let data = await notesService.findByBugId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async archive(req, res, next) {
    try {
      let data = await bugsService.archive(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await bugsService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async find(req, res, next) {
    try {
      let data = await bugsService.find(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async findById(req, res, next) {
    try {
      let data = await bugsService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorId = req.user.sub;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
