import db from '../database/models/index';

class ProfileController {
  static async completeProfile(req, res) {
    const userFound = await db.User.findOne({
      where: { email: req.user.email }
    });

    if (
      userFound &&
      userFound.gender != null &&
      userFound.birthdate != null &&
      userFound.language != null &&
      userFound.currency != null &&
      userFound.country != null &&
      userFound.department != null &&
      userFound.linemanager != null
    ) {
      res.status(400).json({ error: 'Profile is already complete' });
    } else {
      const completedProfile = await userFound.update(req.body);
      res.status(201).json({
        msg: 'Profile completed succesfuly',
        profile: completedProfile
      });
    }
  }
  static async displayProfile(req, res) {
    const userFound = await db.User.findOne({
      where: { email: req.user.email }
    });
    if (userFound) {
      res.status(200).json({ profile: userFound });
    }
  }
  static async updateProfile(req, res) {
    const userFound = await db.User.findOne({
      where: { email: req.user.email }
    });
    if (userFound) {
      const updatedProfile = await userFound.update(req.body);
      res
        .status(201)
        .json({ msg: 'Profile updated succesfuly', profile: updatedProfile });
    }
  }
}
export default ProfileController;
