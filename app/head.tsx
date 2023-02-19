import Script from "next/script"

export default function Head() {
    return (
        <>
            <title>Blog - KoenSchipper.com</title>
            <Script
                strategy='afterInteractive'
                src='https://www.googletagmanager.com/gtag/js?id=G-DKE1R0DG0D'
            />
            <Script
                id='google-analytics'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DKE1R0DG0D', {
                page_path: window.location.pathname,
                });
                `
                }}
            />
            <meta content='width=device-width, initial-scale=1' name='viewport' />
            <link
                rel='icon'
                type='image/x-icon'
                href='https://koenschipper.com/assets/images/koen/logo.png'
            />
        </>
    )
}
