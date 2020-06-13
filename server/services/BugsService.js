import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BugssService {
  archive(id) {
    throw new Error("Method not implemented.");
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
