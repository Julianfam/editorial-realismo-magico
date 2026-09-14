(function () {
  const books = Array.isArray(window.BOOKS) ? window.BOOKS : [];
  const featured = books.find((b) => b.featured) || books[0];
  const grid = document.getElementById("book-grid");
  const modal = document.getElementById("modal");

  document.getElementById("year").textContent = new Date().getFullYear();

  function money(book) {
    if (!book.price) return "Próximamente";
    const amount = Number(book.price);
    if (book.currency === "COP" && !Number.isNaN(amount)) {
      return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }).format(amount);
    }
    if (book.currency === "USD") return `$${book.price} USD`;
    return `${book.price} ${book.currency || ""}`.trim();
  }

  function renderFeatured() {
    if (!featured) return;
    document.getElementById("featured-kicker").textContent = featured.status === "disponible"
      ? "Lanzamiento en Colombia"
      : "Próximamente";
    document.getElementById("featured-title").textContent = featured.title;
    document.getElementById("featured-tagline").textContent = featured.tagline || "";
    document.getElementById("featured-desc").textContent = featured.description || "";
    document.getElementById("featured-cover").src = featured.cover;
    document.getElementById("featured-cover").alt = `Portada de ${featured.title}`;

    const meta = document.getElementById("featured-meta");
    meta.innerHTML = "";
    [featured.genre, featured.year && String(featured.year), featured.pages && `${featured.pages} págs.`, ...(featured.formats || [])]
      .filter(Boolean)
      .forEach((item) => {
        const span = document.createElement("span");
        span.className = "chip";
        span.textContent = item;
        meta.appendChild(span);
      });

    const buy = document.getElementById("featured-buy");
    if (featured.status === "disponible") {
      buy.textContent = `Comprar · ${money(featured)}`;
      buy.href = featured.buyUrl || "#comprar";
    } else {
      buy.textContent = "Avisarme cuando salga";
      buy.href = "#avisame";
    }
  }

  function cardHTML(book) {
    const available = book.status === "disponible";
    return `
      <article class="card" data-id="${book.id}">
        <div class="card-cover"><img src="${book.cover}" alt="Portada de ${book.title}" /></div>
        <div class="card-body">
          <span class="badge ${available ? "badge-on" : "badge-soon"}">${available ? "Disponible" : "Próximamente"}</span>
          <h3>${book.title}</h3>
          <p class="desc">${book.description}</p>
          <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:8px;">
            <span class="price">${money(book)}</span>
            <button class="btn ${available ? "btn-gold" : "btn-ghost"}" data-open="${book.id}">
              ${available ? "Ver / comprar" : "Leer más"}
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderGrid() {
    grid.innerHTML = books.map(cardHTML).join("");
    grid.querySelectorAll("[data-open]").forEach((btn) => {
      btn.addEventListener("click", () => openModal(btn.getAttribute("data-open")));
    });
  }

  function openModal(id) {
    const book = books.find((b) => b.id === id);
    if (!book) return;
    document.getElementById("modal-cover").src = book.cover;
    document.getElementById("modal-genre").textContent = book.genre || "";
    document.getElementById("modal-title").textContent = book.title;
    document.getElementById("modal-tagline").textContent = book.tagline || "";
    document.getElementById("modal-long").textContent = book.longDescription || book.description;
    const actions = document.getElementById("modal-actions");
    if (book.status === "disponible") {
      actions.innerHTML = `<a class="btn btn-gold" href="${book.buyUrl || "#comprar"}">Comprar · ${money(book)}</a>`;
    } else {
      actions.innerHTML = `<a class="btn btn-gold" href="#avisame">Avisarme cuando salga</a>`;
    }
    modal.classList.add("open");
  }

  document.getElementById("modal-close").addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.remove("open");
  });

  document.getElementById("waitlist-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = new FormData(e.target).get("email");
    try {
      const list = JSON.parse(localStorage.getItem("rm-waitlist") || "[]");
      if (email && !list.includes(email)) list.push(email);
      localStorage.setItem("rm-waitlist", JSON.stringify(list));
    } catch (_) {}
    document.getElementById("waitlist-ok").style.display = "block";
    e.target.reset();
  });

  renderFeatured();
  renderGrid();
})();
