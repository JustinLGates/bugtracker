import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class NotesService {
  delete(id) {
    let data = dbContext.Notes.findByIdAndDelete({ _id: id });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async create(body) {
    return await dbContext.Notes.create(body, { new: true });
  }
  async find(query = {}) {
    let data = await dbContext.Notes.find(query).populate(
      "creator",
      "name picture"
    );
    return data;
  }
}

export const notesService = new NotesService();
