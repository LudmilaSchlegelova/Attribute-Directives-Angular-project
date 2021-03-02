import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const customAnimation = trigger('customAnimation', [
  state(
    'isVisible',
    style({
      opacity: '1',
    })
  ),
  state(
    'isNotVisible',
    style({
      opacity: '0',
    })
  ),
  transition('isVisible => isNotVisible', animate('300ms ease-out')),
  transition('isNotVisible => isVisible', animate('300ms ease-out')),
]);
