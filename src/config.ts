const SiteConfig = {
    siteName: 'AstroBlog',
    defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
    language: 'de',
    textDirection: 'ltr',
    links: [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Categories',
            href: '/categories'
        },
        {
            name: 'Contact',
            href: '/contact'
        }
    ]
};

export const SITE = { ...SiteConfig };
