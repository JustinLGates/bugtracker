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
    let res = await dbContext.Notes.create(data);
    return res;
  }
  async findByBugId(query = {}) {
    let data = await dbContext.Notes.find({ bugId: query }).populate(
      "creator",
      "name picture"
    );
    return data;
  }
}

export const notesService = new NotesService();
