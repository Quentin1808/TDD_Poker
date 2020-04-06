export const suits = {
  S: "spades",
  C: "clubs",
  D: "diamonds",
  H: "hearts"
};

export const number = {
  AS: "AS",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  T: "T",
  J: "J",
  Q: "Q",
  K: "K"
};

class Poker {
  constructor() {
    this.Deck = [
      [suits, number],
      [suits, number],
      [suits, number],
      [suits, number],
      [suits, number]
    ];
    this.Hand1 = [[suits, number], [suits, number]];
    this.Hand2 = [[suits, number], [suits, number]];
  }

  getDeckLength() {
    return this.Deck.length;
  }

  // Check si il y a une pair
  hasPair() {
    return this.checkIfNOccurences(2);
  }

  // Check si il y a un brelan
  hasThreeOfAKind() {
    return this.checkIfNOccurences(3);
  }

  // Check si il y a un carré
  hasSuare() {
    return this.checkIfNOccurences(4);
  }

  hasTwoPair(n) {
    //Ici regardr si il y a deux pairs
    //Si il y une pair de trouvé, l'exclure du "champ de recherche"
    //return this.checkIfNOccurences();
    // je m'embrouille xD
    //je vois ça
  }

  hasStraight() {
    for (var i = 0; i < this.getDeckLength(); i++) {
      //var nbSuite = ;
      for (var j = i + 1; j < this.getDeckLength(); j++) {
        if (this.Deck[j][1] === this.Deck[i][1] + 1) {
          return true;
        } else {
          break;
        }
      }
    }
    return false;
  }

  checkIfNOccurences(n) {
    for (var i = 0; i < this.getDeckLength(); i++) {
      var nbOccurences = 1;
      for (var j = i + 1; j < this.getDeckLength(); j++) {
        if (this.Deck[i][1] === this.Deck[j][1]) {
          nbOccurences++;
        }
      }
      if (nbOccurences === n) {
        return true;
      }
    }
    return false;
  }
}

export function createGame() {
  const p = new Poker();
  p.Hand1 = [[suits.C, number.AS], [suits.C, number.J]];
  p.Hand2 = [[suits.D, number.K], [suits.C, number.J]];
  p.Deck = [
    [suits.C, number.AS],
    [suits.C, number.J],
    [suits.H, number[5]],
    [suits.S, number[5]],
    [suits.S, number[7]]
  ];

  return p;
}
