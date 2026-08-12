import {
  MedalIcon,
  ReceiptIcon,
  PaintBucketIcon,
  ClockIcon,
  ShieldCheckIcon,
  BroomIcon,
  DropIcon,
  RulerIcon,
  StackIcon,
  SparkleIcon,
  LightningIcon,
  GaugeIcon,
  WrenchIcon,
  UsersThreeIcon,
} from '@phosphor-icons/react/ssr'

export const ICONS = {
  medal: MedalIcon,
  receipt: ReceiptIcon,
  'paint-bucket': PaintBucketIcon,
  clock: ClockIcon,
  'shield-check': ShieldCheckIcon,
  broom: BroomIcon,
  drop: DropIcon,
  ruler: RulerIcon,
  stack: StackIcon,
  sparkle: SparkleIcon,
  lightning: LightningIcon,
  gauge: GaugeIcon,
  wrench: WrenchIcon,
  users: UsersThreeIcon,
}

export function getIcon(key) {
  return ICONS[key] || MedalIcon
}
