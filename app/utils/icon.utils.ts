import usdcIcon from '@/app/assets/usdc-icon.png';
import usdtcon from '@/app/assets/usdt-icon.png';
import crvIcon from '@/app/assets/crv-icon.png';
import iconPlaceholder from '@/app/assets/Icon-placeholder.png';
import { TokenNames } from '../enums/tokens.enums';

export class IconsUtils {
  public static getIconUrlByName(name: string) {
    switch (name) {
      case TokenNames.USDC:
        return usdcIcon;
      case TokenNames.USDT:
        return usdtcon;
      case TokenNames.CRV:
        return crvIcon;
      default:
        return iconPlaceholder;
    }
  }
}
