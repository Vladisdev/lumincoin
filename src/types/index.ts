export type InputType = {
  id: number
  type: string
  placeholder?: string
  inputId?: string
  hasLabel: boolean
  iconName?: string
}

export type NavItemType = {
  id: number
  text: string
  linkHref?: string
  iconName?: string
  hasSubMenu: boolean
  subMenu?: subMenuItems[]
}

type subMenuItems = {
  id: number
  text: string
  linkHref: string
}
