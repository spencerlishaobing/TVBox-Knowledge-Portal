import Link from 'next/link';
import { ArrowRight, BookOpen, Braces, RadioTower, ShieldCheck } from 'lucide-react';

const cards = [
  { icon: ShieldCheck, title: '饭太硬逆向', text: '固定输入哈希、工具版本、反编译证据和桌面等价实现。', href: '/docs/reverse/fantaiying' },
  { icon: BookOpen, title: '影视仓复刻', text: '从 TVBoxOS 白盒基线到影视仓 Dex2C 脱壳与 PC 功能映射。', href: '/docs/reproduction' },
  { icon: RadioTower, title: '资源健康中心', text: '治理直播源、影视接口、EPG、解析器与真实播放验证。', href: '/docs/resources' },
  { icon: Braces, title: '脚本与维护', text: '同步、解码、差异分析、健康检查和发布全部可重复执行。', href: '/docs/tooling' },
];

export default function HomePage() {
  return (
    <main className="portal-grid flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 pt-24 text-center md:pt-32">
        <div className="mb-6 rounded-full border bg-fd-background/70 px-4 py-1.5 text-sm text-fd-muted-foreground backdrop-blur">私有证据库 + 公开技术门户</div>
        <h1 className="max-w-4xl bg-gradient-to-br from-fd-foreground via-fd-foreground to-fd-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-7xl">TVBox 复刻与资源工程</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-fd-muted-foreground md:text-xl">面向长期维护的影视仓复刻、饭太硬逆向、接口治理与直播源校验知识库。</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/docs" className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-6 py-3 font-medium text-fd-primary-foreground shadow-lg shadow-fd-primary/20 transition hover:-translate-y-0.5">浏览文档 <ArrowRight className="size-4" /></Link>
          <Link href="/docs/reproduction/progress" className="rounded-full border bg-fd-background/70 px-6 py-3 font-medium backdrop-blur transition hover:bg-fd-accent">查看复刻进度</Link>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-6 pb-24 md:grid-cols-2">
        {cards.map(({ icon: Icon, title, text, href }) => (
          <Link key={title} href={href} className="group rounded-2xl border bg-fd-card/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-fd-primary/40 hover:shadow-xl">
            <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-fd-primary/10 text-fd-primary"><Icon className="size-5" /></div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 leading-7 text-fd-muted-foreground">{text}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-fd-primary">进入专题 <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </section>
    </main>
  );
}
