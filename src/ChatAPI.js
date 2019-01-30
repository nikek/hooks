function ChatAPI() {
  const friends = {};

  function subscribeToFriendStatus(id, cb) {
    if (!friends[id]) {
      friends[id] = {
        isOnline: false,
        callbacks: []
      };
      setInterval(
        () => triggerStatusChange(id, { isOnline: !friends[id].isOnline }),
        1000
      );
    }
    if (!friends[id].callbacks.includes(cb)) {
      friends[id].callbacks.push(cb);
    }
  }

  function unsubscribeFromFriendStatus(id, cb) {
    if (friends[id]) {
      friends[id].callbacks = friends[id].callbacks.filter(c => c !== cb);
    }
  }

  function triggerStatusChange(id, status) {
    if (friends[id]) {
      friends[id].isOnline = status.isOnline;
      friends[id].callbacks.forEach(cb => cb(status));
    }
  }

  return {
    subscribeToFriendStatus,
    unsubscribeFromFriendStatus,
    triggerStatusChange
  };
}

export default ChatAPI();
