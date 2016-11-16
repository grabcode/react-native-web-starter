import { configure } from '@kadira/storybook';

const req = require.context('../../app/stories', true);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
