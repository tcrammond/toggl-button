'use strict';

// any.do Q4 2018
togglbutton.render('.CardScrollView:not(.toggl)', { observe: true }, elem => {
  const descriptionElem = $('textarea', elem);

  // since task popup has same selector as overview
  // do nothing when description is not present
  if (!descriptionElem) { return; }

  const projectElem = $('.TasksToolBarCategoryTitle');

  const link = togglbutton.createTimerLink({
    buttonType: 'minimal',
    className: 'anydo--2018',
    description: descriptionElem.value,
    projectName: projectElem ? projectElem.textContent : ''
  });

  descriptionElem.before(link);
});

// any.do Q4 2018 tasks lists
togglbutton.render('.TaskListRow:not(.toggl)', { observe: true }, elem => {
  const descriptionElem = $('input', elem);

  const projectElem = $('.TasksToolBarCategoryTitle');

  const link = togglbutton.createTimerLink({
    buttonType: 'minimal',
    className: 'anydo--2018__taskItem',
    description: descriptionElem ? descriptionElem.value : '',
    projectName: projectElem ? projectElem.textContent : ''
  });

  const container = $('.TaskItem', elem);
  container.appendChild(link);
});

// TODO: probably safe to delete below
togglbutton.render('.dialog:not(.toggl)', { observe: true }, function(elem) {
  var link,
    wrap = createTag('div'),
    container = $('#top-level-details', elem),
    projectElem = $('.folderSelector', elem),
    titleFunc;

  titleFunc = function() {
    return document.querySelector('#title', elem).textContent;
  };

  link = togglbutton.createTimerLink({
    className: 'anydo',
    description: titleFunc,
    projectName: projectElem.textContent
  });

  wrap.appendChild(link);
  container.appendChild(wrap);
});

/* Subtasks */

togglbutton.render(
  '.subtasks-list li .container:not(.toggl)',
  { observe: true },
  function(elem) {
    var link,
      wrap = createTag('div'),
      projectElem = $('.folderSelector'),
      titleFunc;

    titleFunc = function() {
      return $('.title', elem).textContent;
    };

    link = togglbutton.createTimerLink({
      className: 'anydo',
      description: titleFunc,
      projectName: projectElem.textContent
    });

    wrap.appendChild(link);
    elem.insertBefore(wrap, $('.controls', elem));
  }
);
