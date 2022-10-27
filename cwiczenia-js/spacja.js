function spacja(slowo) {
  let noweslowo = "";
  for (let i = 0; i < slowo.length; i++) {
    if (slowo[i] === " ") {
      noweslowo += "-";
    } else {
      noweslowo += slowo[i];
    }
  }
  return noweslowo;
}

console.log("\n");

let zmienna1 = "   Jakieś słowo ";
console.log(spacja(zmienna1));

console.log("\n");

// Jeśli występuje spacja w zmiennej, zwróć treść bez spacji
// Jeśli zwrócony wyraz jest pustym stringiem, wyświetl komunikat "Pole nie może być puste"

function usunSpacje(wyraz) {
  let odpowiedz = "";
  for (let i = 0; i < wyraz.length; i++)
    if (wyraz[i] === " ") continue;
    else if (wyraz[i] !== " ") {
      odpowiedz += wyraz[i];
    }

  if (odpowiedz === "") {
    return "Pole nie może być puste";
  } else {
    return odpowiedz;
  }
}

function test1() {
  const result = usunSpacje("Słowo");
  const expected = "Słowo";

  if (result === expected) {
    console.log("[OK], Funkcja zwraca wyraz bez spacji");
  } else {
    console.log("[FAILED] Powinno zwrócić", expected, "a zwróciło", result);
  }
}

function test2() {
  const result = usunSpacje(" Słowo ");
  const expected = "Słowo";

  if (result === expected) {
    console.log("[OK], Funkcja zwraca wyraz bez spacji");
  } else {
    console.log("[FAILED] Powinno zwrócić", expected, "a zwróciło", result);
  }
}

function test3() {
  const result = usunSpacje("Sł owo");
  const expected = "Słowo";

  if (result === expected) {
    console.log("[OK], Funkcja zwraca wyraz bez spacji");
  } else {
    console.log("[FAILED] Powinno zwrócić", expected, "a zwróciło", result);
  }
}

function test4() {
  const result = usunSpacje("");
  const expected = "Pole nie może być puste";

  if (result === expected) {
    console.log("[OK], Funkcja zwraca kominikat 'Pole nie może być puste'");
  } else {
    console.log("[FAILED] Powinno zwrócić", expected, "a zwróciło", result);
  }
}

function test5() {
  const result = usunSpacje(" ");
  const expected = "Pole nie może być puste";

  if (result === expected) {
    console.log("[OK], Funkcja zwraca kominikat 'Pole nie może być puste'");
  } else {
    console.log("[FAILED] Powinno zwrócić", expected, "a zwróciło", result);
  }
}

test1();
test2();
test3();
test4();
test5();
