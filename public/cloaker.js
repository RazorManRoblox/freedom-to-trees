function cloak() {
  const win = window.open("about:blank", "_blank");
  const iframe = win.document.createElement("iframe");
  iframe.src = location.href;
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";

  win.document.body.style.margin = "0";
  win.document.body.appendChild(iframe);

  location.replace("https://google.com");
}
