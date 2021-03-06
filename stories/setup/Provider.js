/* @flow */
import { createBrowserHistory } from 'history';
import React from 'react';
import { dispatchClientMetadata, fakeI18n } from 'tests/unit/helpers';

import Root from 'core/components/Root';
import { addQueryParamsToHistory } from 'core/utils';

const { store } = dispatchClientMetadata();

const history = addQueryParamsToHistory({
  history: createBrowserHistory(),
});

export default function Provider({ story }: Object) {
  return (
    <Root store={store} history={history} i18n={fakeI18n}>
      {story}
    </Root>
  );
}
