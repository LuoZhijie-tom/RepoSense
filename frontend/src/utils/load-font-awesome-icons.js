import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCaretDown, faCaretRight, faChevronCircleDown, faChevronCircleUp,
  faChevronDown, faChevronUp, faCircle, faCode,
  faEllipsisH, faExclamation, faHistory, faListUl,
  faPlusCircle, faSpinner, faTags, faUser, faUserEdit,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub, faGitlab, faBitbucket,
} from '@fortawesome/free-brands-svg-icons';

// app
library.add(faExclamation, faSpinner, faCode, faListUl);

// resizer
library.add(faCaretRight);

// summary
library.add(faExclamation);

// summary-charts
library.add(
    faChevronUp,
    faChevronDown,
    faDatabase,
    faUser,
    faCode,
    faListUl,
    faCircle,
    faGithub,
    faGitlab,
    faBitbucket,
);

// zoom
library.add(faTags, faEllipsisH);

// authorship
library.add(faCaretDown, faCaretRight, faHistory, faUserEdit);

// segment
library.add(faPlusCircle, faChevronCircleUp, faChevronCircleDown);
