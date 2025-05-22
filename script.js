function tambahSkill() {
  const skillBaru = prompt("Masukkan skill baru:");
  if (skillBaru) {
    const li = document.createElement("li");
    li.textContent = skillBaru;
    document.getElementById("skill-list").appendChild(li);
  }
}
