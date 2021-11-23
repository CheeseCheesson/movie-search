import View from "./View";

export class FilmView extends View {
  render() {
    const container = document.createElement('div');
    container.textContent = 'FilmView'
    this.getRoot().append(container);
  }
}