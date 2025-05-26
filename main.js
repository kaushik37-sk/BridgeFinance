document.getElementById("loanRequestForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);
    const purpose = document.getElementById("purpose").value.trim();
    const resultDiv = document.getElementById("loanResult");
    resultDiv.innerHTML = "";
    if (!name || isNaN(amount) || !purpose) {
        resultDiv.innerHTML = "<p>Please fill in all fields correctly.</p>";
        return;
    }
    const request = { name, amount, purpose };
    const isApproved = simulateLoanApproval(request);
    resultDiv.innerHTML = isApproved
        ? `<p>Congratulations ${name}, your microloan of $${amount} is <strong>Approved!</strong></p>`
        : `<p>Sorry ${name}, your microloan request could not be approved at this time.</p>`;
});
function simulateLoanApproval(request) {
    if (request.amount <= 500 && request.purpose.length > 10)
        return true;
    if (request.amount > 500 && request.amount <= 2000 && request.purpose.includes("inventory"))
        return true;
    return false;
}
