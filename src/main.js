import { render } from './render.js';
import FilterView from './view/filters-view.js';
import PointListPresenter from './presenter.js';

const controlsFiltersElement = document.querySelector('.trip-controls__filters');
const eventsElement = document.querySelector('.trip-events');

const pointListPresenter = new PointListPresenter({pointListContainer: eventsElement});

render(new FilterView, controlsFiltersElement);

pointListPresenter.init();
