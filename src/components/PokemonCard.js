export default function (src, name, description, visit) {
  return `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0 py-3 px-1">
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
            <a href="${visit}" class="btn btn-primary">Visit</a>
        </div>
        </div>
    </div>
  `;
}
