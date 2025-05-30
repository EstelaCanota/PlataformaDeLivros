document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.rating .star');
  const notaInput = document.getElementById('nota');

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      const value = parseInt(star.getAttribute('data-value'));
      stars.forEach(s => {
        s.classList.toggle('hover', parseInt(s.getAttribute('data-value')) <= value);
      });
    });

    star.addEventListener('mouseout', () => {
      stars.forEach(s => s.classList.remove('hover'));
    });

    star.addEventListener('click', () => {
      const value = parseInt(star.getAttribute('data-value'));
      notaInput.value = value;
      stars.forEach(s => {
        s.classList.toggle('selected', parseInt(s.getAttribute('data-value')) <= value);
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const estrelasInput = document.querySelector(".estrelas-input");

    if (form && estrelasInput) {
        estrelasInput.style.display = "none";

        // Criar dropdown
        const label = document.createElement("label");
        label.setAttribute("for", "nota");
        label.textContent = "Nota:";

        const select = document.createElement("select");
        select.setAttribute("name", "nota");
        select.setAttribute("id", "nota");
        select.required = true;

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Selecione";
        select.appendChild(defaultOption);

        for (let i = 1; i <= 5; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }

        const notaDiv = document.createElement("div");
        notaDiv.className = "nota-section";
        notaDiv.appendChild(label);
        notaDiv.appendChild(select);

        form.insertBefore(notaDiv, form.querySelector("button"));
    }
});
