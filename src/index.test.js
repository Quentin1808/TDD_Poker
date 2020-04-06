import { createGame, suits, number } from "./index";

test("create game", () => {
  const game = createGame();

  expect(game.Hand1).toEqual([[suits.C, number.AS], [suits.C, number.J]]);
});

test("test, hasPair", () => {
  const game = createGame();

  expect(game.hasPair()).toBeTruthy();
});

test("test, hasTwoPair", () => {
  const game = createGame();

  expect(game.hasTwoPair()).toBeFalsy();
});

test("test, hasBrelan", () => {
  const game = createGame();

  expect(game.hasThreeOfAKind()).toBeFalsy();
});

test("test, hasSquare", () => {
  const game = createGame();

  expect(game.hasSuare()).toBeFalsy();
});
