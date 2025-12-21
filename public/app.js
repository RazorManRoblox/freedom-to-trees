function normalize(url) {
  if (!url.startsWith("http")) {
    return "https://" + url;
  }
  return url;
}

function go() {
  const url = document.getElementById("url").value.trim();
  if (!url) return;

  const target = normalize(url);
  location.href = "/uv/service/" + __uv$config.encodeUrl(target);
}
