import * as React from 'react';
import compose from '@shopify/react-compose';
import isEqual from 'lodash/isEqual';
import {ContextualSaveBarProps, FrameContext, Consumer} from '../Frame';
import withContext from '../WithContext';
import {WithContextTypes} from '../../types';
import {withAppProvider, WithAppProviderProps} from '../AppProvider';

// The script in the styleguide that generates the Props Explorer data expects
// a component's props to be found in the Props interface. This silly workaround
// ensures that the Props Explorer table is generated correctly, instead of
// crashing if we write `ContextualSaveBar extends React.Component<ContextualSaveBarProps>`
interface Props extends ContextualSaveBarProps {}
export type ComposedProps = Props &
  WithAppProviderProps &
  WithContextTypes<FrameContext>;

class ContextualSaveBar extends React.PureComponent<ComposedProps, never> {
  componentDidMount() {
    const {props} = this;
    props.context.frame.setContextualSaveBar(props);
  }

  componentWillUnmount() {
    this.props.context.frame.removeContextualSaveBar();
  }

  componentDidUpdate(oldProps: ComposedProps) {
    const {props} = this;
    if (contextualSaveBarHasChanged(props, oldProps)) {
      props.context.frame.setContextualSaveBar(props);
    }
  }

  render() {
    return null;
  }
}

function contextualSaveBarHasChanged(
  {message, saveAction, discardAction}: ComposedProps,
  {
    message: oldMessage,
    saveAction: oldsaveAction,
    discardAction: oldDiscardAction,
  }: ComposedProps,
) {
  return Boolean(
    message !== oldMessage ||
      !isEqual(saveAction, oldsaveAction) ||
      !isEqual(discardAction, oldDiscardAction),
  );
}

export default compose<Props>(
  withContext<Props, WithAppProviderProps, FrameContext>(Consumer),
  withAppProvider<Props>(),
)(ContextualSaveBar);
