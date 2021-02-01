const { AuthenticationError, UserInputError } = require("apollo-server");
const ObjectId = require("mongodb").ObjectID;
const Kid = require("../../models/Kid");
const checkAuth = require("../../util/check-auth");
const { validateKidInput } = require("../../util/validators");

module.exports = {
  Query: {
    getKids: async () => {
      try {
        const kids = await Kid.find().sort({ createdAt: -1 });
        return kids;
      } catch (err) {
        throw new Error(err);
      }
    },
    getKid: async (_, { kidId }) => {
      try {
        const kid = await Kid.findById(kidId);
        if (kid) {
          return kid;
        } else {
          throw new Error("kid not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createKid: async (
      _,
      {
        kidInput: {
          firstname,
          lastname,
          sexe,
          father,
          mother,
          adress,
          birthcity,
          birthdate,
          cin,
          firstvac,
          secondvac,
          thirdvac,
          fourthvac,
          fifthvac,
        },
      },
      context
    ) => {
      // const user = checkAuth(context);
      const { valid, errors } = validateKidInput(
        firstname,
        lastname,
        sexe,
        father,
        mother,
        adress,
        birthcity,
        birthdate,
        cin,
        firstvac,
        secondvac,
        thirdvac,
        fourthvac,
        fifthvac
      );

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const newkid = new Kid({
        firstname,
        lastname,
        sexe,
        father,
        mother,
        adress,
        birthcity,
        birthdate,
        cin,
        firstvac: {
          Date: firstvac,
        },
        secondvac: {
          Date: secondvac,
        },
        thirdvac: {
          Date: thirdvac,
        },
        fourthvac: {
          Date: fourthvac,
        },
        fifthvac: {
          Date: fifthvac,
        },
        createdAt: new Date().toISOString(),
      });
      const kid = await newkid.save();

      context.pubsub.publish("NEW_kid", {
        newkid: kid,
      });

      return kid;
    },
    deleteKid: async (_, { kidId }, context) => {
      const user = checkAuth(context);

      try {
        const kid = await kid.findById(kidId);
        if (user.username === Kid.username) {
          await Kid.delete();
          return "kid deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },

    updateKid: async (
      _,
      {
        kidId,
        kidInput: {
          firstname,
          lastname,
          sexe,
          father,
          mother,
          adress,
          birthcity,
          birthdate,
          cin,
          firstvac,
          secondvac,
          thirdvac,
          fourthvac,
          fifthvac,
        },
      },
      context
    ) => {
      const oldKid = await Kid.findById(kidId);

      const kid = {
        firstname,
        lastname,
        sexe,
        father,
        mother,
        adress,
        birthcity,
        birthdate,
        cin,
        firstvac: {
          Date: firstvac,
          Done: oldKid.firstvac.Done,
        },
        secondvac: {
          Date: secondvac,
          Done: oldKid.secondvac.Done,
        },
        thirdvac: {
          Date: thirdvac,
          Done: oldKid.thirdvac.Done,
        },
        fourthvac: {
          Date: fourthvac,
          Done: oldKid.fourthvac.Done,
        },
        fifthvac: {
          Date: fifthvac,
          Done: oldKid.fifthvac.Done,
        },
        _id: kidId,
      };

      return await Kid.findByIdAndUpdate(kidId, kid, { new: true });
    },
    updateVac: async (_, { kidId, vac }, context) => {
      if (vac === "firstvac") {
        const kid = await Kid.findOneAndUpdate(
          { _id: kidId },
          {
            $set: { "firstvac.Done": true },
          }
        );
        return kid;
      }
      if (vac === "secondvac") {
        const kid = await Kid.findOneAndUpdate(
          { _id: kidId },
          {
            $set: { "secondvac.Done": true },
          }
        );

        return kid;
      }
      if (vac === "thirdvac") {
        const kid = await Kid.findOneAndUpdate(
          { _id: kidId },
          {
            $set: { "thirdvac.Done": true },
          }
        );

        return kid;
      }
      if (vac === "fourthvac") {
        const kid = await Kid.findOneAndUpdate(
          { _id: kidId },
          {
            $set: { "fourthvac.Done": true },
          },
          { new: true }
        );

        return kid;
      }
      if (vac === "fifthvac") {
        const kid = await Kid.findOneAndUpdate(
          { _id: kidId },
          {
            $set: { "fifthvac.Done": true },
          }
        );

        return kid;
      } else {
        const kid = await Kid.findById(kidId);
        return kid;
      }
    },
    //     async likekid(_, { kidId }, context) {
    //       const { username } = checkAuth(context);

    //       const kid = await kid.findById(kidId);
    //       if (kid) {
    //         if (kid.likes.find((like) => like.username === username)) {
    //           // kid already likes, unlike it
    //           kid.likes = kid.likes.filter((like) => like.username !== username);
    //         } else {
    //           // Not liked, like kid
    //           kid.likes.push({
    //             username,
    //             createdAt: new Date().toISOString(),
    //           });
    //         }

    //         await kid.save();
    //         return kid;
    //       } else throw new UserInputError("kid not found");
    //     },
    //   },
    //   Subscription: {
    //     newkid: {
    //       subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("NEW_kid"),
    //     },
  },
};
