const MemberRaider = require("../model/memberRaiderModel");

exports.registerRaiderMember = async (req, res, next) => {
  try {
    const { first_name, last_name, sex, dob, phone_number, citizen_id } =
      req.body;

    const raider = await MemberRaider();
    raider.first_name = first_name;
    raider.sex = sex;

    await user.save();

    res.status(201).json({ message: "Create Raider Success" });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

exports.getRaiderMember = async (req, res, next) => {
  try {
    const raiders = await MemberRaider.find();
    res.status(201).json(raiders);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};
