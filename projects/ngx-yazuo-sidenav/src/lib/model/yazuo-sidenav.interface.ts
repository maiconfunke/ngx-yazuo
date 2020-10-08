import { YazuoSidenavDirection } from '../enums/yazuo-sidenav-direction.enum';

export interface YazuoSidenavSettings {
  bgColor?: string;
  animationTime?: number;
  width?: number;
  position?: YazuoSidenavDirection;
  backdrop?: boolean;
  bgBackDrop?: string;
}