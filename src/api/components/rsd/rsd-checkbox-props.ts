import { DivPropsWithoutOnChange } from '@/api/components/interface/base-types'

export interface RsdCheckboxProps extends DivPropsWithoutOnChange {
  value: boolean
  onChange: (value: boolean) => void
  label: string
  className?: string
  theme?: string
}
