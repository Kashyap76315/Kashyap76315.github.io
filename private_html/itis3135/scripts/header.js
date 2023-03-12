document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.innerHTML = `
      <h1>
        ITIS3135 | Kashyap Patel
      </h1>
      <nav>
        <a href="index.html">Home</a> |
        <a href="introduction.html">Introduction</a> |
        <a href="tables.html">HTML Tables</a> |
        <a href="forms.html">HTML Forms</a> |
        <a href="stuff/KRAPPYCRAPPYWE.htm">Crappy Website</a> |
        <a href="website_evaluations.html">Website Evaluation</a> |
        <a href="first-scripts.html">First Script</a> |
        <a href="calculator_try.html">Calculator</a> |
        <a href="polygons.html">Polygons</a> |
      </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  });  