import * as React from 'react';
import {FrameContext} from '../../types';

const defaultContext: FrameContext = {
  frame: {
    showToast: noop,
    hideToast: noop,
    setContextualSaveBar: noop,
    removeContextualSaveBar: noop,
    startLoading: noop,
    stopLoading: noop,
  },
};

function noop() {}

const {Provider, Consumer} = React.createContext<FrameContext>(defaultContext);

export {Provider, Consumer};
