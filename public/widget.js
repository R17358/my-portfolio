(function () {
  const chatBtn = document.createElement("button");
  chatBtn.innerText = "🤖";
  document.body.appendChild(chatBtn);

  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  let isOpen = false;

  // 🔥 Menu container
  const menu = document.createElement("div");
  menu.style.position = "fixed";
  menu.style.bottom = "90px";
  menu.style.right = "20px";
  menu.style.background = "#fff";
  menu.style.borderRadius = "12px";
  menu.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
  menu.style.display = "none";

  menu.innerHTML = `
    <div style="padding:10px; cursor:pointer" onclick="loadApp('chat')">🤖</div>
    <div style="padding:10px; cursor:pointer" onclick="loadApp('shop')">🛒</div>
    <div style="padding:10px; cursor:pointer" onclick="loadApp('docs')">📄</div>
  `;

  document.body.appendChild(menu);

  // 🔥 App switch logic
  window.loadApp = function (type) {
    const urls = {
      chat: "https://page-insighter.vercel.app",
      shop: "https://hindustan-zone.vercel.app",
      docs: "https://nirmiti.vercel.app",
    };

    iframe.src = urls[type];
    iframe.style.display = "block";
    menu.style.display = "none";
    isOpen = true;
  };

  chatBtn.onclick = function () {
    if (!isOpen) {
      menu.style.display = "block";
    } else {
      iframe.style.display = "none";
      isOpen = false;
    }
  };
})();
