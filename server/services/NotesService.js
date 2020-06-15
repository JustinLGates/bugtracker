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
  async create(data) {
    return await dbContext.Notes.create(data, { new: true });
  }
  async findByBugId(query = {}) {
    let data = await dbContext.Notes.find({ _id: query.bugId }).populate(
      "creator",
      "name picture"
    );
    return data;
  }
}

export const notesService = new NotesService();
