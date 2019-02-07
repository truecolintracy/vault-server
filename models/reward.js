'use strict';
module.exports = (sequelize, DataTypes) => {
    const Reward = sequelize.define('CI_Reward', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        description: DataTypes.STRING
    });
    Reward.associate = function(models) {
        // A reward can have many submissions
        Reward.belongsToMany(models.CI_Submission, { through: 'ci_submission_reward' });
    };
    return Reward;
};