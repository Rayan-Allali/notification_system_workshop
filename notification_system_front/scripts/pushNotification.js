const button = document.getElementById('triggers');
console.log(button);
button.addEventListener('click', () => {
  console.log('Button clicked');
  if (Notification.permission === 'granted') {
    showNotification();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showNotification();
      } else {
        console.log('Permission denied');
      }
    });
  } else {
    console.log('Permission denied earlier');
  }
});

const showNotification = () => {
    new Notification('Hello!', {
      body: 'This is a web notification.',
      icon: 'https://via.placeholder.com/150',
      link: 'https://www.example.com',
    });
  };
