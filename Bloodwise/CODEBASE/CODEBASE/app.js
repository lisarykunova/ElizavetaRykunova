function analyze() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  if (!input) {
    output.innerHTML = "<p>Введите данные анализа</p>";
    return;
  }

  // простой “парсер” (имитация AI логики)
  const results = [
    { name: "Гемоглобин", status: "норма" },
    { name: "Лейкоциты", status: "повышены" },
    { name: "Глюкоза", status: "норма" }
  ];

  output.innerHTML = results.map(r => `
    <div class="card">
      <b>${r.name}</b><br>
      Статус: ${r.status}
    </div>
  `).join("");
}
