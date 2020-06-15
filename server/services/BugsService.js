import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BugssService {
  async archive(id) {
    let update = { status: true };
    return await dbContext.Bugs.findByIdAndUpdate({ _id: id }, update, {
      new: true,
    });
  }
  async create(body) {
    return await dbContext.Bugs.create(body, { new: true });
  }
  async find(query = {}) {
    let data = await dbContext.Bugs.find(query).populate(
      "creator",
      "name picture"
    );
    return data;
  }
  async findById(id) {
    let data = await dbContext.Bugs.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
}

export const bugsService = new BugssService();
