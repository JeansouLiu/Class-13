window.addEventListener('load', function () {
  if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }
    if (window.Notification && Notification.permission === "granted") {
	  var img = 'https://class13.jeansou.com/forum/public/assets/logo-dm1cnzci.png';
      var notification = new Notification('13班记录站', { body: '眼里有事 心中有光', icon: img });
    }
    else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }
        if (status === "granted") {
          var img = 'img/favicon.ico';
          var notification = new Notification('13班记录站', { body: '眼里有事 心中有光', icon: img });
        }
      });
    }
  });
