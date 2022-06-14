import autoBind from "auto-bind";

import AdminModel from "./AdminModel";
import BaseRepository from "../../../../base/BaseRepository";
// import { date } from "@hapi/joi";

class AdminRepository extends BaseRepository {
  constructor() {
    super(AdminModel);
    autoBind(this);
  }

  async findAll(page, limit) {
    const result = await this.model.findAll({
      offset: page,
      limit,
      raw: true,
    });
    return result;
  }

  async findOneByID(id) {
    const result = await this.model.findOne({
      where: { id },
      raw: true,
    });
    return result;
  }

  async findOneByNameAndId(id, name) {
    const result = await this.model.findOne({
      where: { id, name },
      raw: true,
    });
    return result;
  }

  async update(id, data) {
    const result = await this.model.update(data, { where: { id } });
    return result;
  }
}

export default AdminRepository;
