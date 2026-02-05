import React, { useEffect, useState } from "react";
import AccessDenied from "../AccessDenied";

const withAccess = (
  WrapComponent,
  { requiredRole, requiredPermission },
) => {
  return function WithRoleAccessComponent(props) {
    const { role, permissions = [] } = props;

    if (requiredRole && role !== requiredRole) {
      return <AccessDenied/>;
    }

    if (requiredPermission && !permissions.includes("REPORT")) {
      return <AccessDenied/>;
    }

    return <WrapComponent {...props} />;
  };
};

export default withAccess;
