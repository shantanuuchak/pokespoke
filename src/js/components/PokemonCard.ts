// The Pokemon Component
export default function (data): Element {
  const { image, name, description, visit } = data;

  const div: Element = document.createElement("div");
  div.classList.add(
    ...`col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0 py-3 px-1`.split(" ")
  );

  div.innerHTML = `
    <div class="card">
      <img src="${image}" class="card-img-top" alt="Eevee">
      <div class="card-body">
          <h2 class="card-title">${name}</h2>
          <p class="card-text">
          ${description}
          </p>
          ${
            visit
              ? `<a href="${visit}" target="_blank" class="btn btn-warning">Visit</a>`
              : ""
          }
      </div>
    </div>
  `;

  return div;
}
