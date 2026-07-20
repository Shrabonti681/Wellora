/* Wellora — shared shell: sidebar, topbar, mobile nav, modal + toast helpers. */

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", href: "dashboard.html", icon: "dashboard" },
  { key: "doses", label: "Today’s Doses", href: "doses.html", icon: "doses" },
  { key: "medicines", label: "Medicines", href: "medicines.html", icon: "medicines" },
  { key: "inventory", label: "Inventory", href: "inventory.html", icon: "inventory" },
  { key: "prescriptions", label: "Prescriptions", href: "prescriptions.html", icon: "prescriptions" },
  { key: "history", label: "Dose History", href: "history.html", icon: "history" },
  { key: "reminders", label: "Reminders", href: "reminders.html", icon: "reminders" },
  { key: "family", label: "Family Members", href: "family.html", icon: "family" },
  { key: "reports", label: "Reports", href: "reports.html", icon: "reports" },
  { key: "settings", label: "Settings", href: "settings.html", icon: "settings" },
];

const MOBILE_NAV_ITEMS = [
  { key: "dashboard", label: "Home", href: "dashboard.html", icon: "home" },
  { key: "doses", label: "Schedule", href: "doses.html", icon: "schedule" },
  { key: "medicines", label: "Medicines", href: "medicines.html", icon: "medicines" },
  { key: "more", label: "More", href: "settings.html", icon: "more" },
];

function renderShell(activeKey, opts){
  opts = opts || {};
  const sidebar = document.getElementById("sidebar-slot");
  const topbar = document.getElementById("topbar-slot");
  const mobilenav = document.getElementById("mobilenav-slot");

  if (sidebar){
    sidebar.outerHTML = `
    <aside class="sidebar" aria-label="Primary navigation">
      <a href="dashboard.html" class="brand" style="text-decoration:none;">
        <span class="brand-mark">${icon('logo')}</span>
        <span class="brand-name">Wellora</span>
      </a>
      <nav class="side-nav">
        ${NAV_ITEMS.map(item => `
          <a href="${item.href}" class="${item.key === activeKey ? 'active' : ''}">
            ${icon(item.icon)}<span>${item.label}</span>
          </a>`).join("")}
      </nav>
      <div class="sidebar-foot">
        <span class="avatar">${WELLORA_DATA.currentUser.initials}</span>
        <div>
          <div class="who">${WELLORA_DATA.currentUser.name}</div>
          <div class="role">Account owner</div>
        </div>
      </div>
    </aside>`;
  }

  if (topbar){
    const profiles = WELLORA_DATA.profiles;
    const current = opts.profileId || profiles[0].id;
    topbar.outerHTML = `
    <header class="topbar">
      <div class="search-box">
        ${icon('search')}
        <input type="text" placeholder="Search medicines, prescriptions, family members…" aria-label="Search Wellora" />
      </div>
      <div class="topbar-spacer"></div>
      <button class="icon-btn" aria-label="Notifications" onclick="location.href='reminders.html'">
        ${icon('bell')}<span class="notif-dot"></span>
      </button>
      <label class="profile-pill">
        <span class="avatar" style="width:24px;height:24px;font-size:11px;">${profiles.find(p=>p.id===current).initials}</span>
        <select id="profile-switcher" aria-label="Switch profile" onchange="onProfileSwitch(this.value)">
          ${profiles.map(p => `<option value="${p.id}" ${p.id===current?'selected':''}>${p.name}</option>`).join("")}
          <option value="__add">+ Add new member</option>
        </select>
      </label>
    </header>`;
  }

  if (mobilenav){
    mobilenav.outerHTML = `
    <nav class="mobile-nav" aria-label="Mobile navigation">
      <ul>
        ${MOBILE_NAV_ITEMS.map(item => `
          <li><a href="${item.href}" class="${item.key === activeKey ? 'active' : ''}">
            ${icon(item.icon)}<span>${item.label}</span>
          </a></li>`).join("")}
      </ul>
    </nav>`;
  }
}

function onProfileSwitch(value){
  if (value === "__add"){
    location.href = "family.html";
    return;
  }
  showToast(`Now managing ${WELLORA_DATA.profiles.find(p=>p.id===value)?.name || value}`);
}

/* ---------- Modal helpers ---------- */
function openModal(id){
  const el = document.getElementById(id);
  if (el) el.classList.add("open");
}
function closeModal(id){
  const el = document.getElementById(id);
  if (el) el.classList.remove("open");
}
document.addEventListener("click", function(e){
  if (e.target.classList && e.target.classList.contains("modal-overlay")){
    e.target.classList.remove("open");
  }
});
document.addEventListener("keydown", function(e){
  if (e.key === "Escape"){
    document.querySelectorAll(".modal-overlay.open").forEach(m => m.classList.remove("open"));
  }
});

/* ---------- Toast helper ---------- */
function showToast(message){
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap){
    wrap = document.createElement("div");
    wrap.className = "toast-wrap";
    document.body.appendChild(wrap);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `${icon('checkCircle')}<span>${message}</span>`;
  wrap.appendChild(toast);
  setTimeout(() => { toast.style.opacity = "0"; toast.style.transition = "opacity .3s"; setTimeout(()=>toast.remove(), 300); }, 2600);
}

/* ---------- Tabs helper ---------- */
function initTabs(root){
  root = root || document;
  root.querySelectorAll(".tab-row").forEach(row => {
    row.querySelectorAll("button[data-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        const panelGroup = btn.closest("[data-tab-group]") || root;
        row.querySelectorAll("button[data-tab]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        panelGroup.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
        const panel = panelGroup.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`);
        if (panel) panel.classList.add("active");
      });
    });
  });
}

/* ---------- Strip renderer (signature blister-pack device) ---------- */
function renderStrip(states, size){
  const cls = size === 'lg' ? 'strip strip-lg' : 'strip';
  return `<div class="${cls}">${states.map(s => `<span class="strip-cap is-${s}"></span>`).join("")}</div>`;
}
