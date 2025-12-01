function calculateProfit() {
    let investment = document.getElementById("investment").value;
    let rate = document.getElementById("rate").value;

    if (investment === "" || rate === "") {
        alert("Please fill both fields.");
        return;
    }

    let profit = (investment * rate) / 100;

    document.getElementById("result").innerHTML = 
        "Your profit will be: PKR " + profit;
}

// Fake portfolio data (demo)
const portfolio = [
  { asset: "Demo Stock A", qty: 10, price: 42.35 },
  { asset: "Demo Stock B", qty: 5, price: 125.40 },
  { asset: "Demo ETF X", qty: 20, price: 18.20 }
];

function renderPortfolio() {
  const tbody = document.querySelector("#portfolio-table tbody");
  tbody.innerHTML = "";
  let total = 0;
  portfolio.forEach(item => {
    const value = item.qty * item.price;
    total += value;
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.asset}</td><td>${item.qty}</td><td>$${item.price.toFixed(2)}</td><td>$${value.toFixed(2)}</td>`;
    tbody.appendChild(row);
  });
  document.getElementById("total-value").textContent = `Total value: $${total.toFixed(2)}`;
}

function computeFutureValue(P, r_percent, n_years) {
  const r = r_percent/100;
  return P * Math.pow(1 + r, n_years);
}

document.getElementById("calc-btn").addEventListener("click", () => {
  const P = parseFloat(document.getElementById("amount").value) || 0;
  const r = parseFloat(document.getElementById("rate").value) || 0;
  const n = parseFloat(document.getElementById("years").value) || 0;
  const fv = computeFutureValue(P, r, n);
  document.getElementById("calc-result").textContent = `Estimated future value: $${fv.toFixed(2)} (compounded annually)`;
});

// initial render
renderPortfolio();
