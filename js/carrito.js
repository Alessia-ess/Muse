document.addEventListener("DOMContentLoaded", function () {
  const shippingOptions = document.getElementById("shippingOptions");
  const shippingButtons = Array.from(
    document.querySelectorAll(".shipping-btn")
  );

  if (!shippingOptions || shippingButtons.length === 0) return;
  function handleShippingSelection(index) {
    if (index < 0 || index >= shippingButtons.length) return;

    shippingButtons.forEach((btn) => btn.classList.remove("active"));
    shippingButtons[index].classList.add("active");

    shippingOptions.classList.toggle("right", index === 1);

    const selectedMethod = shippingButtons[index].textContent.trim();
    updateShippingMethod(selectedMethod);
  }

  function updateShippingMethod(method) {
    console.log("Método seleccionado:", method);
  }

  shippingButtons.forEach((button, index) => {
    button.addEventListener("click", () => handleShippingSelection(index));
  });

  handleShippingSelection(0);
});
