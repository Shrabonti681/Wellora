/* Wellora — shared lightweight interactions (demo/front-end only). */

function markDoseTaken(btn, medicineName){
  const card = btn.closest(".dose-card") || btn.closest(".timeline-item");
  if (card){
    const badge = card.querySelector(".pill");
    if (badge){ badge.className = "pill pill-taken"; badge.textContent = "Taken"; }
    const actions = card.querySelector(".dose-actions");
    if (actions){ actions.innerHTML = `<span class="text-muted mono" style="font-size:12.5px;">Recorded just now</span>`; }
  }
  showToast(`${medicineName || 'Dose'} marked as taken`);
}

function skipDoseFlow(name){
  openModal("modal-skip-reason");
  document.getElementById("modal-skip-reason").dataset.medicine = name || "";
}
function confirmSkip(){
  const name = document.getElementById("modal-skip-reason").dataset.medicine;
  closeModal("modal-skip-reason");
  showToast(`${name || 'Dose'} marked as skipped`);
}

function snoozeDoseFlow(name){
  openModal("modal-snooze");
}
function confirmSnooze(minutes){
  closeModal("modal-snooze");
  showToast(`Reminder snoozed for ${minutes}`);
}

/* Inventory add-stock preview calculation */
function updateStockPreview(){
  const current = parseFloat(document.getElementById("stock-current")?.dataset.value || 0);
  const type = document.querySelector('input[name="update-type"]:checked')?.value || "add";
  const qty = parseFloat(document.getElementById("stock-qty")?.value || 0) || 0;
  let next = current;
  if (type === "add") next = current + qty;
  else if (type === "remove" || type === "dispose" || type === "damaged") next = Math.max(0, current - qty);
  else if (type === "replace") next = qty;
  const preview = document.getElementById("stock-preview-new");
  if (preview) preview.textContent = next + " " + (document.getElementById("stock-unit")?.textContent || "");
}

function confirmStockUpdate(){
  closeModal("modal-add-stock");
  showToast("Inventory updated");
}

/* Prescription upload simulated flow */
function simulateUpload(zoneId, resultId){
  const result = document.getElementById(resultId);
  if (result){
    result.style.display = "block";
    showToast("Prescription analyzed — please review the details");
  }
}

/* Generic confirm-and-close for small modals */
function confirmAndClose(modalId, message){
  closeModal(modalId);
  if (message) showToast(message);
}

/* Segmented control helper */
function initSegmented(root){
  (root || document).querySelectorAll(".segmented").forEach(group => {
    group.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        group.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  });
}
document.addEventListener("DOMContentLoaded", () => initSegmented());
