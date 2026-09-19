import localFont from 'next/font/local'

export const serviceNowSans = localFont({
    src: [
        { path: '../public/assets/fonts/ServiceNowSans-Thin.woff2', weight: '200', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Light.woff2', weight: '300', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Regular.woff2', weight: '400', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Bold.woff2', weight: '700', style: 'normal' },
    ],
    variable: '--serviceNowSans', display: 'swap',
})
