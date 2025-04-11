// Make sure we are doing module augmentation.
import "leaflet";

declare module "leaflet" {
    namespace Control {
        export function select(options: any): any;
    }
}