'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AvailableRequests', [{
      requester: "JOHN Doe",
      requestType: 1,
      requestedOn: "2020-01-21",
      reason: "Visit Kigali",
      status: "pending",
      action: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      requester: "JANE Doe",
      requestType: 3,
      requestedOn: "2020-01-21",
      reason: "Visit Kigali",
      status: "approved",
      action: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      requester: "JOHN Doe",
      requestType: 3,
      requestedOn: "2020-01-21",
      reason: "Visit Kigali",
      status: "pending",
      action: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      requester: "JOHN Doe",
      requestType: 1,
      requestedOn: "2020-01-21",
      reason: "Visit Kigali",
      status: "pending",
      action: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      requester: "JANE Doe",
      requestType: 2,
      requestedOn: "2020-01-21",
      reason: "Visit Nairobi",
      status: "approved",
      action: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AvailableRequests', null, {});
  }
};
