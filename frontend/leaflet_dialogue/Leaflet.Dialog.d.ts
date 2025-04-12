// Make sure we are doing module augmentation.
import "leaflet";

declare module "leaflet" {
    namespace Control {
        export function dialogue2(options: any): any;
    }
}