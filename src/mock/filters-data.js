const filtersProps = [
  {
    inputAttrs: {
      type: `radio`,
      id: `filter__all`,
      class: `filter__input visually-hidden`,
      name: `filter`,
      isChecked: `checked`,
      isDisabled: ``,
    },
    labelAttrs: {
      for: `filter__all`,
      class: `filter__label`,
    },
    labelText: `ALL`,
    spanAttrs: {
      class: `filter__all-count`,
    },
    spanText: `15`,
  },
  {
    inputAttrs: {
      type: `radio`,
      id: `filter__overdue`,
      class: `filter__input visually-hidden`,
      name: `filter`,
      isChecked: ``,
      isDisabled: `disabled`,
    },
    labelAttrs: {
      for: `filter__overdue`,
      class: `filter__label`,
    },
    labelText: `OVERDUE`,
    spanAttrs: {
      class: `filter__overdue-count`,
    },
    spanText: `0`,
  },
  {
    inputAttrs: {
      type: `radio`,
      id: `filter__today`,
      class: `filter__input visually-hidden`,
      name: `filter`,
      isChecked: ``,
      isDisabled: `disabled`,
    },
    labelAttrs: {
      for: `filter__today`,
      class: `filter__label`,
    },
    labelText: `TODAY`,
    spanAttrs: {
      class: `filter__today-count`,
    },
    spanText: `0`,
  },
  {
    inputAttrs: {
      type: `radio`,
      id: `filter__favorites`,
      class: `filter__input visually-hidden`,
      name: `filter`,
      isChecked: ``,
      isDisabled: ``,
    },
    labelAttrs: {
      for: `filter__favorites`,
      class: `filter__label`,
    },
    labelText: `FAVORITES`,
    spanAttrs: {
      class: `filter__favorites-count`,
    },
    spanText: `7`,
  },
  {
    inputAttrs: {
      type: `radio`,
      id: `filter__repeating`,
      class: `filter__input visually-hidden`,
      name: `filter`,
      isChecked: ``,
      isDisabled: ``,
    },
    labelAttrs: {
      for: `filter__repeating`,
      class: `filter__label`,
    },
    labelText: `Repeating`,
    spanAttrs: {
      class: `filter__repeating-count`,
    },
    spanText: `2`,
  },
  {
    inputAttrs: {
      type: `radio`,
      id: `filter__tags`,
      class: `filter__input visually-hidden`,
      name: `filter`,
      isChecked: ``,
      isDisabled: ``,
    },
    labelAttrs: {
      for: `filter__tags`,
      class: `filter__label`,
    },
    labelText: `Tags`,
    spanAttrs: {
      class: `filter__tags-count`,
    },
    spanText: `6`,
  },
  {
    inputAttrs: {
      type: `radio`,
      id: `filter__archive`,
      class: `filter__input visually-hidden`,
      name: `filter`,
      isChecked: ``,
      isDisabled: ``,
    },
    labelAttrs: {
      for: `filter__archive`,
      class: `filter__label`,
    },
    labelText: `ARCHIVE`,
    spanAttrs: {
      class: `filter__archive-count`,
    },
    spanText: `115`,
  },
];

export default filtersProps;
