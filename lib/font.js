import localFont from 'next/font/local'

export const mulish = localFont({
    src: [
        { path: '../public/assets/fonts/GoogleSans-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../public/assets/fonts/GoogleSans-Medium.ttf', weight: '500', style: 'normal' },
        { path: '../public/assets/fonts/GoogleSans-Bold.ttf', weight: '700', style: 'normal' },
    ],
    variable: '--mulish', display: 'swap',
})

export const urbanist = localFont({
    src: [
        { path: '../public/assets/fonts/GoogleSans-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../public/assets/fonts/GoogleSans-Medium.ttf', weight: '500', style: 'normal' },
        { path: '../public/assets/fonts/GoogleSans-Bold.ttf', weight: '700', style: 'normal' },
    ],
    variable: '--urbanist', display: 'swap',
})

export const dM_Sans = localFont({
    src: [
        { path: '../public/assets/fonts/GoogleSans-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../public/assets/fonts/GoogleSans-Medium.ttf', weight: '500', style: 'normal' },
        { path: '../public/assets/fonts/GoogleSans-Bold.ttf', weight: '700', style: 'normal' },
    ],
    variable: '--dM_Sans', display: 'swap',
})
