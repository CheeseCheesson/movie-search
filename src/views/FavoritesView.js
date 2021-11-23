import View from "./View";

export class FavoritesView extends View {
  render() {
    const container = document.createElement('div');
    container.textContent = 'Favorites filme'
    this.getRoot().append(container);
  }
}