import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from '@/shared/error/error-boundary-routes';

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        {}
      </ErrorBoundaryRoutes>
    </div>
  );
};
