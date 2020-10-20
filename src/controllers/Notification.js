import { Notification } from '../database/models';

export default {
  deleteNotification: async (req, res) => {
    const { id } = req.params;
    const deleted = await Notification.destroy({ where: { id } });
    if (!deleted) {
      return res
        .status(404)
        .sned({ message: res.__('No notification found to delete') });
    }
    return res
      .status(200)
      .send({ message: res.__('Notification deleted successfully') });
  },
  getAllNotifications: async (req, res) => {
    const notifications = await Notification.findAll();
    if (!notifications) {
      return res.status(404).send({ message: res.__('No notification found') });
    }
    return res.status(200).send(notifications);
  },
  getSingleNotification: async (req, res) => {
    const { id } = req.params;
    const notification = await Notification.findOne({ where: { id } });
    if (!notification) {
      return res.status(404).send({ message: res.__('No notification found') });
    }
    return res.status(200).send(notification);
  },
  countUnseenNotifications: async (req, res) => {
    const { id } = req.params;
    const amount = await Notification.count({ where: { id } });
    res.status(200).send({ amount });
  }
};
