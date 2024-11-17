let input = document.getElementById("myInput");
let table = document.getElementById("myTable");
let tr = table.getElementsByTagName("tr");
input.addEventListener("keyup", function () {
  let filter = input.value;
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toLocaleLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
// search country
let inputCountry = document.getElementById("Input");
inputCountry.addEventListener("keyup", function () {
  let filter = inputCountry.value;
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toLocaleLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
