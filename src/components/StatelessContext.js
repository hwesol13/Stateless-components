import React from 'react';

const StatelessContext = (props, context) =>
  <div style={context.theme}>
    <h1>Context in stateless component</h1>
    {JSON.stringify(context.theme, null, 2)}
  </div>;

StatelessContext.contextTypes = {theme: React.PropTypes.object};

export default StatelessContext;
