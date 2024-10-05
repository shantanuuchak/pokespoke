export default function (src, name, description, visit) {
  return `
    <div class="card">
      <img
          src="${src}"
          class="card-img-top"
          alt="${name}"
      />
      <div class="card-body">
          <h2 class="card-title">${name}</h5>
          <p class="card-text">
          ${description}
          </p>
          ${
            visit &&
            `<a href="${visit}" target="_blank" class="btn btn-warning">Visit</a>`
          }
      </div>
    </div>
  `;
}
