import * as userManagementModule from "./userManagementModule";

describe("users management module", () => {
  describe("create a user", () => {
    it("should create a basic user", () => {
      const user = userManagementModule.createUser("Tri", "Pham", 18, "mgm");
      expect(user).toHaveProperty("firstName", "Tri");
      expect(user).toHaveProperty("lastName", "Pham");
      expect(user).toHaveProperty("age", 18);
      expect(user).toHaveProperty("workAt", "mgm");
    });

    afterEach(userManagementModule.reset);
  });
  describe("find user", () => {
    let user1, user2, user3, user4, user5, user6, user7, user8;
    beforeEach(() => {
      user1 = userManagementModule.createUser("user1", "Peon", 16, "mgm");
      user2 = userManagementModule.createUser("user2", "Peon", 23, "dtu");
      user3 = userManagementModule.createUser("user3", "Peon", 21, "dut");
      user4 = userManagementModule.createUser("user4", "Peon", 34, "fpt");
      user5 = userManagementModule.createUser("user5", "Peon", 21, "fpt");
      user6 = userManagementModule.createUser("user6", "Beru", 23, "dtu");
      user7 = userManagementModule.createUser("user7", "Beru", 16, "dut");
      user8 = userManagementModule.createUser("user8", "Peon", 23, "dtu");
    });

    it("should find all users", () => {
      const users = userManagementModule.findAllUsers();
      expect(users).toHaveLength(8);
      expect(users[0]).toHaveProperty("firstName", "user1");
      expect(users[2]).toHaveProperty("firstName", "user3");
    });

    it("should find user by Id", () => {
      const user = userManagementModule.findUserById(user1.id);
      expect(user).toBeDefined();
      expect(user).toHaveProperty("firstName", user1.firstName);
    });

    describe("conditionally find users", () => {
      describe("OR condition", () => {
        it("firstName", () => {
          const users = userManagementModule.findUsers({
            firstName: user1.firstName,
          });
          expect(users).toHaveLength(1);
          expect(users[0]).toHaveProperty("firstName", user1.firstName);
        });

        it("lastName", () => {
          const users = userManagementModule.findUsers({ lastName: "Peon" });
          expect(users).toHaveLength(6);
          for (const user of users) {
            expect(user).toHaveProperty("lastName", "Peon");
          }
        });

        it("workAt", () => {
          const users = userManagementModule.findUsers({ workAt: "fpt" });
          expect(users).toHaveLength(2);
          for (const user of users) {
            expect(user).toHaveProperty("workAt", "fpt");
          }
        });
      });

      describe("AND condition", () => {
        it("Peon at fpt", () => {
          const users = userManagementModule.findUsers({
            lastName: "Peon",
            workAt: "fpt",
          });
          expect(users).toHaveLength(2);
          for (const user of users) {
            expect(user).toHaveProperty("lastName", "Peon");
            expect(user).toHaveProperty("workAt", "fpt");
          }
        });

        it("Age 23 at dtu", () => {
          const users = userManagementModule.findUsers({
            age: 23,
            workAt: "dtu",
          });
          expect(users).toHaveLength(3);
          for (const user of users) {
            expect(user).toHaveProperty("age", 23);
            expect(user).toHaveProperty("workAt", "dtu");
          }
        });
      });
    });

    it("no result", () => {
      const users = userManagementModule.findUsers({ firstName: "user10" });
      expect(users).toHaveLength(0);
    });

    afterEach(userManagementModule.reset);
  });

  describe("update user", () => {
    let user1, user2, user3;
    beforeEach(() => {
      user1 = userManagementModule.createUser("user1", "Peon", 16, "mgm");
      user2 = userManagementModule.createUser("user2", "Peon", 23, "dtu");
      user3 = userManagementModule.createUser("user3", "Peon", 23, "dtu");
    });

    it("should update a user by id", () => {
      const updatedUsers = userManagementModule.updateUserById(user1.id, {
        firstName: "Tri",
      });

      const [updatedUser] = updatedUsers;

      expect(user1.id).toEqual(user1.id, updatedUser.id);
      expect(updatedUser).toHaveProperty("firstName", "Tri");
    });

    it.skip("should update multiple users", () => {
      const updatedUsers = userManagementModule.updateUsers(
        { workAt: "dtu" },
        { firstName: "Tri" }
      );

      for (const updatedUser of updatedUsers) {
        expect(updatedUser).toHaveProperty("workAt", "dtu");
        expect(updatedUser).toHaveProperty("firstName", "Tri");
      }
    });
    afterEach(userManagementModule.reset);
  });

  describe("delete user", () => {
    let user1, user2, user3;
    beforeEach(() => {
      user1 = userManagementModule.createUser("user1", "Peon", 16, "mgm");
      user2 = userManagementModule.createUser("user2", "Peon", 23, "dtu");
      user3 = userManagementModule.createUser("user3", "Peon", 23, "dtu");
    });
    it("should delete a user by id", () => {
      const foundUser = userManagementModule.findUserById(user1.id);
      expect(foundUser).toBeDefined();
      userManagementModule.deleteUserById(user1.id);
      const deletedUser = userManagementModule.findUserById(user1.id);
      expect(deletedUser).toBeUndefined();
    });

    it("should delete multiple users", () => {
      const deletedUsers = userManagementModule.deleteUsers({ workAt: "dtu" });

      for (const deletedUser of deletedUsers) {
        expect(
          userManagementModule.findUserById(deletedUser.id)
        ).toBeUndefined();
      }
    });
    afterEach(userManagementModule.reset);
  });

  describe("CRUD", () => {
    it.skip("should work correctly", () => {
      const user = userManagementModule.createUser("Tri", "Pham", 18, "mgm");
      expect(user).toHaveProperty("firstName", "Tri");
      expect(user).toHaveProperty("lastName", "Pham");
      expect(user).toHaveProperty("age", 18);

      expect(userManagementModule.findUserById(user.id)).toBeDefined();

      const updatedUser = userManagementModule.updateUserById(user.id, {
        age: 26,
      });
      expect(updatedUser).toHaveProperty("firstName", "Tri");
      expect(updatedUser).toHaveProperty("age", 26);

      userManagementModule.deleteUserById(updatedUser.id);
      expect(userManagementModule.findUserById(updatedUser.id)).toBeUndefined();
    });

    afterEach(userManagementModule.reset);
  });
});
