class Calculator {
  addition(x, y) {
    return x + y;
  }
}

function mult(x, y) {
  return x * y;
}

function div(x, y) {
  if (x == 0) {
    throw EvalError("can't divide on 0");
  } else {
    return x / y;
  }
}

function abs(res) {
  return abs(res);
}
