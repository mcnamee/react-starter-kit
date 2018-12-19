import React from 'react';
import Error from '../UI/Error';
import TemplateNothing from '../Templates/Nothing';

const ErrorScreen = () => (
  <TemplateNothing>
    <Error
      title="404"
      content="Sorry, that page could not be found"
    />
  </TemplateNothing>
);

export default ErrorScreen;
