fetch("https://api.mcsrvstat.us/2/mc.gnwork.cn:59903")
  .then(r => r.json())
  .then(data => {
    document.getElementById("status").innerText =
      data.online ? "Online" : "Offline";
  });
