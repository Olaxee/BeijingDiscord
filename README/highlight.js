fetch("README.md")
  .then(res => res.text())
  .then(md => {
    document.getElementById("preview").innerHTML = marked.parse(md);
  });
