export class BrowserDetectUtils {
    static isBrowserIE(): boolean {
        const ua = window.navigator.userAgent,
            msie = ua.indexOf('MSIE '),
            trident = ua.indexOf('Trident/'),
            edge = ua.indexOf('Edge/');
        if (msie > 0) { return true; }
        if (trident > 0) { return true; }
        if (edge > 0) { return true; }
        return false;
    }

    static isBrowserChrome(): boolean {
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }
}
