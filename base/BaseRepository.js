import autoBind from "auto-bind";

class BaseRepository {
  constructor(model) {
    this.model = model;
    autoBind(this);
  }

  async findOneByEmail(email) {
    try {
      const foundUser = await this.model.findOne({
        where: { email },
        raw: true,
      });

      if (foundUser) {
        return {
          isSuccess: true,
          data: foundUser,
        };
      }
      return {
        isSuccess: false,
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
        message: "Not Found",
      };
    }
  }

  async create(data) {
    try {
      await this.model.create(data);

      return {
        isSuccess: true,
        message: "Register new successfully!",
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
        error: error.message || "Some error occurred while creating User!",
      };
    }
  }

  async createMany(dataArray) {
    try {
      await this.model.bulkCreate(dataArray);
      return {
        isSuccess: true,
        message: `Create ${this.model.tableName}s successfully!`,
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
        error:
          error.message
          || `Some error occurred while creating ${this.model.tableName}s`,
      };
    }
  }
}

export default BaseRepository;
