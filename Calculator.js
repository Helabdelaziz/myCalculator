function add(x, y) {
  // this is commment message
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function sub(x, y) {
  return y - x;
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
