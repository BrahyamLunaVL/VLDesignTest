// Eagerly imports every flag PNG so `FLAGS` stays in sync with the assets
// folder automatically — add a new country by dropping the .png file in
// assets/, no import to maintain by hand.
const modules = import.meta.glob('./assets/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export const FLAGS = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.match(/([^/]+)\.png$/)![1], url]),
) as Record<string, string>

export type FlagName = keyof typeof FLAGS
