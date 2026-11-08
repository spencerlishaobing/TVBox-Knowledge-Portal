import { Provider } from '@/components/provider';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://spencerlishaobing.github.io/TVBox-Knowledge-Portal/'),
  title: { default: 'TVBox 复刻与资源工程', template: '%s · TVBox 复刻与资源工程' },
  description: '影视仓复刻、饭太硬逆向、接口治理与直播源校验知识库',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
