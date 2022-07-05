export default class View {
  #root
  #handleFavoriteButtonClick
constructor(root){
  this.#root = root;
  this.#handleFavoriteButtonClick = null
}
  getRoot(){
    return this.#root
  }

  setHandleFavoriteButtonClick(handleFavoriteButtonClick){
    this.#handleFavoriteButtonClick = handleFavoriteButtonClick
  }

  getHandleFavoriteButtonClick(){
    return this.#handleFavoriteButtonClick
  }
  update(){}

  render(){}

}