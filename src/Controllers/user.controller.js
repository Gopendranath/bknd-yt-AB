const dbModel = require("../Models/dbmodel.js");

const getAllUsers = async (req, res) => {
    try {
        const users = await dbModel.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message, 'location: getAllUsers');
        res.status(500).json({ message: error.message });
    }
}

const getAllUserNames = async (req, res) => {
    try {
        const allNames = await dbModel.distinct("name");
        if (!allNames || allNames.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(allNames);
    } catch (error) {
        console.log(error.message, 'location: getAllUserNames');
        res.status(500).json({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await dbModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message, 'location: getUserById');
        res.status(500).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    try {
        const { name, subscribedChannels } = req.body;
        if (!name || !Array.isArray(subscribedChannels)) {
            return res.status(400).json({ message: "Name and subscribedChannels (array) are required" });
        }
        const db = new dbModel({ name, subscribedChannels });
        await db.save();
        res.status(201).json(db);
    } catch (error) {
        console.log(error.message, 'location: createUser');
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, subscribedChannels } = req.body;

        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        if (!name && !subscribedChannels) {
            return res.status(400).json({ message: "At least one field (name or subscribedChannels) is required" });
        }

        const updatedUser = await dbModel.findByIdAndUpdate(
            id,
            { ...(name && { name }), ...(subscribedChannels && { subscribedChannels }) },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "Subscriber not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error.message, 'location: updateUser');
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllUsers,
    getAllUserNames,
    getUserById,
    createUser,
    updateUser
}
