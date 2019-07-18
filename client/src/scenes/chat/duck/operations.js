export default function isNotLastUserMessage(data, id) {
  const message = data.filter(item => item.id === id)[0];

  if (message.currentUser) {
    const userMessages = data.filter(item => item.currentUser === true);
    
    return userMessages.pop().id === id;
  }
  return true;
}
