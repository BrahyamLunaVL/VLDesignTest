// Eagerly imports every icon SVG so `ICONS` stays in sync with the assets
// folder automatically — add a new icon by dropping the .svg file in
// assets/solid or assets/regular, no import to maintain by hand.
const solidModules = import.meta.glob('./assets/solid/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const regularModules = import.meta.glob('./assets/regular/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

function toIcons(modules: Record<string, string>, style: 'solid' | 'regular') {
  const entries: [string, string][] = []
  for (const [path, url] of Object.entries(modules)) {
    const name = path.match(/([^/]+)\.svg$/)![1]
    entries.push([`${style}/${name}`, url])
  }
  return entries
}

export const ICONS = Object.fromEntries([
  ...toIcons(solidModules, 'solid'),
  ...toIcons(regularModules, 'regular'),
]) as Record<string, string>

export type IconName = keyof typeof ICONS
