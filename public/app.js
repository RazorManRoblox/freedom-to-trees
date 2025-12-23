function go() {
  let url = document.getElementById("url").value.trim();
  let proxy = document.getElementById("proxy").value;

  if (!url) return;

  if (!url.includes(".")) {
    url = "https://www.google.com/search?q=" + encodeURIComponent(url);
  } else if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  if (proxy === "uv") {
    location.href = "/uv/service/" + __uv$config.encodeUrl(url);
  } else {
    location.href = "https://scramjet.space/" + url;
  }
}

// panic key
document.addEventListener("keydown", e => {
  if (e.key === "\\") {
    location.href = "https://classroom.google.com";
  }
});
