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
        <a href="website_evaluations.html">Website Evaluation</a> |
        <a href="first-scripts.html">First Script</a> |
        <a href="calculator_try.html">Calculator Try</a> |
        <a href="calculator_fcc.html">Calculator FCC</a> |
        <a href="polygons.html">Polygons</a> |
        <a href="arrays.html">Arrays</a> |
        <a href="contract.html">Contract</a>
      </nav>
      <nav style="padding: 2%;">
      <a href="stuff/ KRAPPYCRAPPYWE.htm">Crappy Website</a> |
      <a href="">Accessibility</a>
      </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  });  