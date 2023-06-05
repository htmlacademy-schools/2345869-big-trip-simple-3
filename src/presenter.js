import { render } from './render';
import CreationFormView from './view/creationForm-view';
import EditingFormView from './view/editingForm-view';
import ListView from './view/list-view';
import PointView from './view/point-view';
import SortView from './view/sort-view';

export default class PointListPresenter {
  pointList = new ListView();

  constructor({pointListContainer}) {
    this.pointListContainer = pointListContainer;
  }

  init() {
    render(new SortView, this.pointListContainer);
    render(this.pointList, this.pointListContainer);
    render(new EditingFormView, this.pointList.getElement());
    render(new CreationFormView, this.pointList.getElement());
    for (let i = 0; i < 3; i++) {
      render(new PointView, this.pointList.getElement());
    }
  }
}
