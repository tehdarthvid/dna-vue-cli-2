export default {
  /*increment(context) {
    context.commit("increment");
  }
  */
  increment({ commit }) {
    commit("increment");
  },
  setActiveCard({ commit }, card) {
    console.log(`action setActiveCard ${card.title}`);
    commit("setActiveCard", card);
  }
};
