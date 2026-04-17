window.addEventListener("load", function () {
  const chatBtn = document.createElement("button");
  chatBtn.innerText = "🤖";

  Object.assign(chatBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "999999",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    background: "#4f9cff",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer"
  });

  document.body.appendChild(chatBtn);

  const iframe = document.createElement("iframe");
  Object.assign(iframe.style, {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "350px",
    height: "500px",
    border: "none",
    display: "none",
    zIndex: "999999"
  });

  document.body.appendChild(iframe);

  const menu = document.createElement("div");
  Object.assign(menu.style, {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    background: "#fff",
    zIndex: "999999",
    display: "none",
    borderRadius: "10px"
  });

  menu.innerHTML = `
    <div data-app="chat">🤖 Chat</div>
    <div data-app="shop">🛒 Shop</div>
    <div data-app="docs">📄 Docs</div>
  `;

  document.body.appendChild(menu);

  function loadApp(type) {
    const urls = {
      chat: "https://nirmiti.vercel.app",
      shop: "https://hindustan-zone.vercel.app",
      docs: "https://page-insighter.vercel.app",
    };

    iframe.src = urls[type];
    iframe.style.display = "block";
    menu.style.display = "none";
  }

  menu.querySelectorAll("div").forEach(item => {
    item.style.padding = "10px";
    item.style.cursor = "pointer";

    item.addEventListener("click", () => {
      loadApp(item.dataset.app);
    });
  });

  let isOpen = false;

  chatBtn.onclick = () => {
    if (!isOpen) {
      menu.style.display = "block";
    } else {
      iframe.style.display = "none";
    }
    isOpen = !isOpen;
  };
});
