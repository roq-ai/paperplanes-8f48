const mapping: Record<string, string> = {
  campaigns: 'campaign',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
