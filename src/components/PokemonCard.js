export default function (src, name, description, visit) {
  return `
    <div class="card">
      <img
          src="${src}"
          class="card-img-top"
          alt="${name}"
      />
      <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">
          ${description}
          </p>
          <a href="${visit}" target="_blank" class="btn btn-primary">Visit</a>
      </div>
    </div>
  `;
}
