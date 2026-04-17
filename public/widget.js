window.addEventListener("load", function () {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // ================= BUTTON =================
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
    background: isDark ? "#1f2937" : "#4f9cff",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease"
  });

  chatBtn.onmouseenter = () => chatBtn.style.transform = "scale(1.1)";
  chatBtn.onmouseleave = () => chatBtn.style.transform = "scale(1)";

  document.body.appendChild(chatBtn);

  // ================= BACKDROP =================
  const backdrop = document.createElement("div");
  Object.assign(backdrop.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.2)",
    backdropFilter: "blur(3px)",
    zIndex: "999998",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 0.3s ease"
  });

  document.body.appendChild(backdrop);

  // ================= IFRAME =================
  const iframe = document.createElement("iframe");
  Object.assign(iframe.style, {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "360px",
    height: "520px",
    border: "none",
    borderRadius: "16px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    zIndex: "999999",
    opacity: "0",
    transform: "translateY(40px) scale(0.95)",
    transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
    display: "none"
  });

  document.body.appendChild(iframe);

  // ================= MENU =================
  const menu = document.createElement("div");
  Object.assign(menu.style, {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    background: isDark ? "#111827" : "#fff",
    color: isDark ? "#fff" : "#000",
    zIndex: "999999",
    display: "none",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    overflow: "hidden",
    opacity: "0",
    transform: "translateY(20px)",
    transition: "all 0.25s ease"
  });

  menu.innerHTML = `
    <div data-app="chat">🤖 Nirmiti</div>
    <div data-app="shop">🛒 E-Shop</div>
    <div data-app="docs">📄 PageInsighter</div>
  `;

  document.body.appendChild(menu);

  menu.querySelectorAll("div").forEach(item => {
    Object.assign(item.style, {
      padding: "12px 16px",
      cursor: "pointer",
      transition: "background 0.2s"
    });

    item.onmouseenter = () => item.style.background = isDark ? "#1f2937" : "#f3f4f6";
    item.onmouseleave = () => item.style.background = "transparent";

    item.addEventListener("click", () => {
      loadApp(item.dataset.app);
    });
  });

  // ================= LOGIC =================
  let isOpen = false;

  function loadApp(type) {
    const urls = {
      chat: "https://nirmiti.vercel.app",
      shop: "https://hindustan-zone.vercel.app",
      docs: "https://page-insighter.vercel.app",
    };

    iframe.src = urls[type];
    iframe.style.display = "block";

    setTimeout(() => {
      iframe.style.opacity = "1";
      iframe.style.transform = "translateY(0) scale(1)";
    }, 10);

    menu.style.display = "none";
    backdrop.style.opacity = "1";
    backdrop.style.pointerEvents = "auto";

    isOpen = true;
    chatBtn.innerText = "✖";
  }

  function openMenu() {
    menu.style.display = "block";
    setTimeout(() => {
      menu.style.opacity = "1";
      menu.style.transform = "translateY(0)";
    }, 10);
  }

  function closeAll() {
    iframe.style.opacity = "0";
    iframe.style.transform = "translateY(40px) scale(0.95)";
    menu.style.opacity = "0";
    menu.style.transform = "translateY(20px)";
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";

    setTimeout(() => {
      iframe.style.display = "none";
      menu.style.display = "none";
    }, 300);

    isOpen = false;
    chatBtn.innerText = "🤖";
  }

  chatBtn.onclick = (e) => {
    e.stopPropagation();
    if (!isOpen) {
      openMenu();
    } else {
      closeAll();
    }
  };

  // 🔥 CLICK OUTSIDE TO CLOSE
  document.addEventListener("click", (e) => {
    if (
      !iframe.contains(e.target) &&
      !menu.contains(e.target) &&
      e.target !== chatBtn
    ) {
      closeAll();
    }
  });

  backdrop.onclick = closeAll;
});
