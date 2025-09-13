function loadPart(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(err => console.error("Error loading " + file, err));
}

loadPart("header", "header.html");
loadPart("footer", "footer.html");
