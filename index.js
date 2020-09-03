// --------------------- MATRIX CONTAINER---------------------
let M = [[], [], []];

// --------------------- USER USER INPUT DECLARATION ---------------------
M[0][0] = Number(document.getElementById("num1").value);
M[0][1] = Number(document.getElementById("num2").value);
M[0][2] = Number(document.getElementById("num3").value);
M[1][0] = Number(document.getElementById("num4").value);
M[1][1] = Number(document.getElementById("num5").value);
M[1][2] = Number(document.getElementById("num6").value);
M[2][0] = Number(document.getElementById("num7").value);
M[2][1] = Number(document.getElementById("num8").value);
M[2][2] = Number(document.getElementById("num9").value);

//--------------------- CALL FUNCTION FOR DETERMINANT ---------------------
function DET() {
  M[0][0] = Number(document.getElementById("num1").value);
  M[0][1] = Number(document.getElementById("num2").value);
  M[0][2] = Number(document.getElementById("num3").value);
  M[1][0] = Number(document.getElementById("num4").value);
  M[1][1] = Number(document.getElementById("num5").value);
  M[1][2] = Number(document.getElementById("num6").value);
  M[2][0] = Number(document.getElementById("num7").value);
  M[2][1] = Number(document.getElementById("num8").value);
  M[2][2] = Number(document.getElementById("num9").value);

  let first = M[0][0] * (M[1][1] * M[2][2] - M[2][1] * M[1][2]);
  let second = M[0][1] * (M[1][0] * M[2][2] - M[2][0] * M[1][2]);
  let third = M[0][2] * (M[1][0] * M[2][1] - M[2][0] * M[1][1]);
  let result = first - second + third;
  document.getElementById("screen").innerHTML = result;
}
