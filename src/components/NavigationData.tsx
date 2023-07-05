export type LinkType = {
  startTitle: string
  startLink: string
  finalTitle: string
  finalLink: string
}

class LinkClass {
  startTitle: string
  startLink: string
  finalTitle: string
  finalLink: string
  constructor(
    startTitle: string,
    startLink: string,
    finalTitle: string,
    finalLink: string,
  ) {
    this.startTitle = startTitle
    this.startLink = startLink
    this.finalTitle = finalTitle
    this.finalLink = finalLink
  }
}

export const NavLinks: LinkType[] = [
  new LinkClass(
    '1-useState-start',
    'use-state-start',
    '1-useState-final',
    'use-state-final',
  ),
  new LinkClass(
    'Task Manager Start',
    'task-manager-starter',
    'Task Manager Final',
    'task-manager-final',
  ),
]
