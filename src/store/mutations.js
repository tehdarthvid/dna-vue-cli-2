export default {
  increment(state) {
    state.count++;
  },
  setActiveCard(state, card) {
    console.log(`mutation setActiveCard ${card.title}`);
    state.activeCard = card;
  }
};
