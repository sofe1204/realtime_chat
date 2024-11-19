const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
  
    if (!name || !room) {
      return { error: 'Username and room are required.' };
    }
  
    const existingUser = users.find((user) => user.room === room && user.name === name);
  
    if (existingUser) {
      return { error: 'Username is taken.' };
    }
  
    const user = { id, name, room };
    users.push(user);
  
    console.log('User added:', user);  
  
    return { user };
  };
  

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
  
    if (index !== -1) {
      const removedUser = users.splice(index, 1)[0];
      console.log('User removed:', removedUser);  
      return removedUser;
    }
  };
  

const getUser = (id) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
      console.log(`User with ID ${id} not found`);  
    }
    return user;
  };
  

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };