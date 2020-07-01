window.addEventListener('load', function () {
  if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }
    if (window.Notification && Notification.permission === "granted") {
	  var img = 'img/favicon.ico';
      var notification = new Notification('13班记录站', { body: '欢迎访问本站', icon: img });
    }
    else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }
        if (status === "granted") {
          var img = 'img/favicon.ico';
          var notification = new Notification('13班记录站', { body: '欢迎访问本站', icon: img });
        }
      });
    }
  });