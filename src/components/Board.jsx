import { useState } from "react";
import Column from "./Column";
import Remove from "./Remove";
// import { DEFAULT_CARDS } from "../data/data";
import { useEffect } from "react";

function Board() {
  const [cards, setCards] = useState([]);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards, hasChecked]);

  useEffect(() => {
    const cardsData = localStorage.getItem("cards");
    setCards(cardsData ? JSON.parse(cardsData) : []);
    setHasChecked(true);
  }, []);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Todo"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <Remove setCards={setCards} />
    </div>
  );
}

export default Board;
