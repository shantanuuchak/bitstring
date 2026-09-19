import localFont from 'next/font/local'

export const mulish = localFont({
    src: [
        { path: '../public/assets/fonts/ServiceNowSans-Book.woff2', weight: '300', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Regular.woff2', weight: '400', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Medium.woff2', weight: '500', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Bold.woff2', weight: '700', style: 'normal' },
    ],
    variable: '--mulish', display: 'swap',
})

export const urbanist = localFont({
    src: [
        { path: '../public/assets/fonts/ServiceNowSans-Book.woff2', weight: '300', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Regular.woff2', weight: '400', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Medium.woff2', weight: '500', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Bold.woff2', weight: '700', style: 'normal' },
    ],
    variable: '--urbanist', display: 'swap',
})

export const dM_Sans = localFont({
    src: [
        { path: '../public/assets/fonts/ServiceNowSans-Book.woff2', weight: '300', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Regular.woff2', weight: '400', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Medium.woff2', weight: '500', style: 'normal' },
        { path: '../public/assets/fonts/ServiceNowSans-Bold.woff2', weight: '700', style: 'normal' },
    ],
    variable: '--dM_Sans', display: 'swap',
})
