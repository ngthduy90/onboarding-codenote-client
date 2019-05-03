import React from 'react';
import { Route } from 'react-router-dom';
import { Indexable } from '../../types/indexable-type';

interface AppliedRouteType extends Indexable {
  component: any,
  props?: any
  exact?: boolean
  path?: string
}

const AppliedRoute = ({ component: C, props: cProps, ...rest }: AppliedRouteType) =>
  <Route {...rest} render={ props => <C {...props} {...cProps} /> } />;

export default AppliedRoute;
