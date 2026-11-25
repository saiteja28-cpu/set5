
function validate() {
    let name = document.getElementById("name").value;
    let pizza = document.getElementById("pizza").value;
    let qty = document.getElementById("qty").value;

    if (name == "" || pizza == "" || qty <= 0) {
        alert("Please fill all fields");
        return false;
    }

    alert("Pizza Ordered Successfully!");
    return false;
}
