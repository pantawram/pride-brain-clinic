import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pride Brain Clinic | คลินิกสมองและระบบประสาท',
    description: 'Pride Brain Clinic คลินิกเฉพาะทางด้านสมองและระบบประสาท บริการตรวจวินิจฉัย รักษา และฟื้นฟู โดยทีมแพทย์เชี่ยวชาญ',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
          <html lang="th">
                <body>{children}</body>body>
          </html>html>
        )
}</html>
